import React, { useState, useEffect } from 'react';
import { 
  X, Code2, Server, Terminal, Copy, Check, Sliders, Globe, 
  Send, Database, BookOpen, ExternalLink, RefreshCw 
} from 'lucide-react';
import { getApiConfig, setApiConfig, subscribeToApiActivity } from '../services/rankingApi';

export default function ApiSimulatorDrawer({ isOpen, onClose }) {
  const [config, setConfig] = useState(getApiConfig());
  const [lastActivity, setLastActivity] = useState(null);
  const [activeTab, setActiveTab] = useState('live'); // 'live' | 'docs' | 'settings'
  const [copied, setCopied] = useState(false);
  const [customUrlInput, setCustomUrlInput] = useState(config.baseUrl);

  useEffect(() => {
    const unsubscribe = subscribeToApiActivity((activity, newConfig) => {
      if (activity) setLastActivity(activity);
      if (newConfig) setConfig(newConfig);
    });
    return unsubscribe;
  }, []);

  if (!isOpen) return null;

  const handleModeChange = (mode) => {
    setApiConfig({ mode });
    setConfig(getApiConfig());
  };

  const handleLatencyChange = (e) => {
    const latency = parseInt(e.target.value, 10);
    setApiConfig({ latencyMs: latency });
    setConfig(getApiConfig());
  };

  const handleSaveCustomUrl = () => {
    setApiConfig({ baseUrl: customUrlInput.trim(), mode: 'custom' });
    setConfig(getApiConfig());
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(typeof text === 'string' ? text : JSON.stringify(text, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const curlCommand = `curl -X GET "${config.baseUrl}${lastActivity?.endpoint || '/rankings?category=OPEN&page=1&limit=10'}" \\
  -H "Accept: application/json"`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-navy-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-navy-950 text-slate-100 h-full flex flex-col shadow-2xl border-l border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-navy-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base text-white tracking-tight font-display">
                  Consola de Integración API
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 border border-brand-500/30">
                  v1.0 REST
                </span>
              </div>
              <p className="text-xs text-blue-200/70">
                Arquitectura desacoplada: simula o conecta un backend en tiempo real
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-navy-950 px-4 text-xs font-mono">
          <button
            onClick={() => setActiveTab('live')}
            className={`py-3 px-4 border-b-2 font-medium flex items-center gap-2 transition-colors ${
              activeTab === 'live'
                ? 'border-brand-500 text-brand-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Tráfico en Vivo ({lastActivity?.status || 200})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`py-3 px-4 border-b-2 font-medium flex items-center gap-2 transition-colors ${
              activeTab === 'settings'
                ? 'border-brand-500 text-brand-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Configurar Conexión</span>
          </button>

          <button
            onClick={() => setActiveTab('docs')}
            className={`py-3 px-4 border-b-2 font-medium flex items-center gap-2 transition-colors ${
              activeTab === 'docs'
                ? 'border-brand-500 text-brand-400 bg-white/5'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Doc de Endpoints</span>
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* TAB: LIVE ACTIVITY */}
          {activeTab === 'live' && (
            <div className="space-y-5">
              
              {/* Request Status Bar */}
              <div className="p-4 rounded-xl bg-navy-900 border border-white/10 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-bold bg-brand-500 text-white">
                    {lastActivity?.method || 'GET'}
                  </span>
                  <span className="text-blue-200 truncate max-w-xs sm:max-w-md">
                    {lastActivity?.endpoint || '/rankings?category=OPEN&page=1&limit=10'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-400 font-bold">
                    {lastActivity?.status || 200} OK
                  </span>
                  <span className="text-slate-400">
                    {lastActivity?.latency || `${config.latencyMs}ms`}
                  </span>
                  <span className="text-[10px] text-blue-300 bg-blue-900/50 px-2 py-0.5 rounded">
                    {lastActivity?.source || 'Mock Provider'}
                  </span>
                </div>
              </div>

              {/* cURL Command Box */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span>Equivalente cURL Terminal:</span>
                  <button
                    onClick={() => copyToClipboard(curlCommand)}
                    className="flex items-center gap-1 text-brand-400 hover:text-brand-300"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
                <div className="p-3 bg-black/60 rounded-xl border border-white/10 font-mono text-xs text-blue-300 overflow-x-auto whitespace-pre">
                  {curlCommand}
                </div>
              </div>

              {/* Response JSON Viewer */}
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
                  <span>Respuesta JSON Recibida:</span>
                  <button
                    onClick={() => copyToClipboard(lastActivity?.response)}
                    className="flex items-center gap-1 text-brand-400 hover:text-brand-300"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copiar JSON</span>
                  </button>
                </div>

                <div className="p-4 bg-black/80 rounded-2xl border border-white/10 font-mono text-xs text-emerald-300 overflow-x-auto max-h-96">
                  <pre>{JSON.stringify(lastActivity?.response || { message: 'Navega o filtra en la tabla para ver peticiones vivas' }, null, 2)}</pre>
                </div>
              </div>

            </div>
          )}

          {/* TAB: SETTINGS & CONNECTION */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              
              {/* Provider Selection */}
              <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-4">
                <h4 className="font-bold text-sm text-white font-display">
                  Origen de Datos (Data Provider)
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleModeChange('mock')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.mode === 'mock'
                        ? 'bg-brand-500/20 border-brand-500 text-white shadow-glow'
                        : 'bg-navy-950 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Database className="w-5 h-5 text-brand-400" />
                      {config.mode === 'mock' && <span className="w-2 h-2 rounded-full bg-emerald-400"></span>}
                    </div>
                    <div className="font-bold text-sm text-white">Mock Provider</div>
                    <div className="text-[11px] text-slate-400 mt-1">Datos fieles del PDF con simulación completa de latencia.</div>
                  </button>

                  <button
                    onClick={() => handleModeChange('custom')}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      config.mode === 'custom'
                        ? 'bg-brand-500/20 border-brand-500 text-white shadow-glow'
                        : 'bg-navy-950 border-white/10 text-slate-400 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Globe className="w-5 h-5 text-neon-cyan" />
                      {config.mode === 'custom' && <span className="w-2 h-2 rounded-full bg-neon-cyan"></span>}
                    </div>
                    <div className="font-bold text-sm text-white">API Remota / Local</div>
                    <div className="text-[11px] text-slate-400 mt-1">Conecta a tu servidor real (Node, Django, Laravel, etc.).</div>
                  </button>
                </div>
              </div>

              {/* Custom API Base URL Input */}
              <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
                <h4 className="font-bold text-sm text-white font-display">
                  Endpoint Base URL
                </h4>
                <p className="text-xs text-slate-400">
                  Introduce la URL donde corre tu backend cuando vayas a conectar la API final:
                </p>

                <div className="flex gap-2">
                  <input
                    type="url"
                    value={customUrlInput}
                    onChange={(e) => setCustomUrlInput(e.target.value)}
                    placeholder="https://api.tudominio.cl/v1 o http://localhost:8000/api"
                    className="flex-1 px-4 py-2.5 rounded-xl bg-navy-950 border border-white/20 text-white text-xs font-mono focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                  <button
                    onClick={handleSaveCustomUrl}
                    className="px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold font-mono transition-colors"
                  >
                    Guardar
                  </button>
                </div>
              </div>

              {/* Latency Simulator Slider */}
              <div className="p-5 rounded-2xl bg-navy-900 border border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-white font-display">
                    Simulación de Latencia de Red
                  </h4>
                  <span className="font-mono text-xs font-bold text-neon-lime">
                    {config.latencyMs} ms
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1500"
                  step="50"
                  value={config.latencyMs}
                  onChange={handleLatencyChange}
                  className="w-full accent-brand-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>0ms (Instantáneo)</span>
                  <span>300ms (Banda Ancha)</span>
                  <span>1500ms (3G Móvil)</span>
                </div>
              </div>

            </div>
          )}

          {/* TAB: ENDPOINTS SPECIFICATION */}
          {activeTab === 'docs' && (
            <div className="space-y-5 text-xs">
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-200">
                Esta especificación define los contratos REST que el equipo de backend debe implementar para alimentar esta maqueta sin alterar el código frontend.
              </div>

              {/* Endpoint 1 */}
              <div className="p-4 rounded-xl bg-navy-900 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    GET
                  </span>
                  <span className="font-mono font-bold text-white">/api/v1/rankings</span>
                </div>
                <p className="text-slate-300">
                  Retorna la lista paginada de jugadores clasificados con soporte para filtros.
                </p>
                <div className="text-[11px] text-slate-400 font-mono">
                  <div><strong>Query params:</strong> category (string), gender ('M'|'F'|'ALL'), search (string), sortBy (string), page (number), limit (number)</div>
                </div>
              </div>

              {/* Endpoint 2 */}
              <div className="p-4 rounded-xl bg-navy-900 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    GET
                  </span>
                  <span className="font-mono font-bold text-white">/api/v1/players/:id</span>
                </div>
                <p className="text-slate-300">
                  Retorna la ficha técnica detallada del jugador, estadísticas de sets y torneos disputados.
                </p>
              </div>

              {/* Endpoint 3 */}
              <div className="p-4 rounded-xl bg-navy-900 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-mono font-bold bg-brand-500 text-white">
                    POST
                  </span>
                  <span className="font-mono font-bold text-white">/api/v1/players/register</span>
                </div>
                <p className="text-slate-300">
                  Enrola un nuevo jugador en el circuito con estado pendiente o asignación de puntos base (100 pts).
                </p>
              </div>

              {/* Endpoint 4 */}
              <div className="p-4 rounded-xl bg-navy-900 border border-white/10 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    GET
                  </span>
                  <span className="font-mono font-bold text-white">/api/v1/events</span>
                </div>
                <p className="text-slate-300">
                  Retorna el calendario oficial de eventos y torneos federados con multiplicador de puntos.
                </p>
              </div>

            </div>
          )}

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-white/10 bg-navy-900 flex items-center justify-between text-xs text-slate-400">
          <span>APACHI API Suite Ready</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-white text-navy-900 font-bold hover:bg-slate-100 transition-colors"
          >
            Cerrar Consola
          </button>
        </div>

      </div>
    </div>
  );
}

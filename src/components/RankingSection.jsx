import React, { useState, useEffect } from 'react';
import { 
  Trophy, Search, Filter, ArrowUpDown, ChevronLeft, ChevronRight, 
  RefreshCw, Download, Award, Flame, User, CheckCircle2, 
  ArrowUp, ArrowDown, Minus, ExternalLink, Sparkles
} from 'lucide-react';
import { fetchRankings, fetchCategories } from '../services/rankingApi';

export default function RankingSection({ onSelectPlayer, onOpenApiDrawer }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('OPEN');
  const [selectedGender, setSelectedGender] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('points');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);

  const [loading, setLoading] = useState(true);
  const [rankingData, setRankingData] = useState([]);
  const [meta, setMeta] = useState(null);

  // Load categories metadata
  useEffect(() => {
    fetchCategories().then((res) => setCategories(res.data));
  }, []);

  // Fetch rankings whenever filters change
  const loadData = async () => {
    setLoading(true);
    try {
      const res = await fetchRankings({
        category: selectedCategory,
        gender: selectedGender,
        search: searchQuery,
        sortBy,
        sortOrder,
        page: currentPage,
        limit,
      });
      setRankingData(res.data);
      setMeta(res.meta);
    } catch (err) {
      console.error('Error fetching rankings:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedCategory, selectedGender, searchQuery, sortBy, sortOrder, currentPage]);

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('desc');
    }
    setCurrentPage(1);
  };

  // Podium top 3 (computed from current data or category top)
  const topThree = rankingData.slice(0, 3);

  const exportToJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rankingData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ranking_apachi_${selectedCategory.toLowerCase()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section id="ranking" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Trophy className="w-3.5 h-3.5 text-brand-500" />
              <span>Clasificación Oficial Regional</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy-900 tracking-tight font-display">
              Tabla de Ranking Oficial
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1 max-w-2xl">
              Datos auditados por la Asociación Pádel Araucanía Chile. Puntos computados según resultados de torneos oficiales.
            </p>
          </div>

          {/* Quick API & Export Tools */}
          <div className="flex items-center space-x-2 self-start md:self-auto">
            <button
              onClick={loadData}
              disabled={loading}
              className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-brand-600 hover:border-brand-300 transition-all shadow-sm active:scale-95 disabled:opacity-50"
              title="Recargar desde API"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-brand-500' : ''}`} />
            </button>

            <button
              onClick={exportToJson}
              className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-brand-600 hover:border-brand-300 text-xs font-semibold shadow-sm transition-all active:scale-95"
              title="Descargar datos en formato JSON"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">JSON</span>
            </button>

            <button
              onClick={onOpenApiDrawer}
              className="flex items-center space-x-2 px-3.5 py-2.5 rounded-xl bg-navy-900 text-white hover:bg-brand-600 text-xs font-semibold shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-neon-lime" />
              <span>Ver Schema API</span>
            </button>
          </div>
        </div>

        {/* Category Pills Navigation (Horizontal scrollable) */}
        <div className="mb-6 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                    active
                      ? 'bg-brand-500 text-white shadow-glow'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters Bar: Gender Selector & Search Query */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Gender Buttons */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl w-full md:w-auto">
            {[
              { id: 'ALL', label: 'Todos' },
              { id: 'M', label: 'Masculino' },
              { id: 'F', label: 'Femenino' },
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => {
                  setSelectedGender(g.id);
                  setCurrentPage(1);
                }}
                className={`flex-1 md:flex-initial px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedGender === g.id
                    ? 'bg-white text-brand-600 shadow-sm'
                    : 'text-slate-600 hover:text-navy-900'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar jugador, club o ciudad..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
            />
          </div>
        </div>

        {/* Top 3 Podium Cards (when viewing category) */}
        {!searchQuery && topThree.length >= 3 && currentPage === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 items-end">
            
            {/* 2nd Place (Silver) */}
            <div
              onClick={() => onSelectPlayer(topThree[1])}
              className="order-2 md:order-1 cursor-pointer bg-gradient-to-b from-white to-slate-50 p-6 rounded-2xl border-2 border-slate-300/80 shadow-md hover:shadow-xl hover:border-slate-400 transition-all transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-extrabold text-sm border border-slate-300">
                #2
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                  {topThree[1].image ? (
                    <img src={topThree[1].image} alt={topThree[1].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-600 font-bold text-lg">
                      {topThree[1].name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Subcampeón</span>
                  <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {topThree[1].name}
                  </h3>
                  <p className="text-xs text-slate-500">{topThree[1].club}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/80 text-center">
                <div>
                  <div className="text-xs text-slate-500">Puntos</div>
                  <div className="text-base font-extrabold text-brand-600">{topThree[1].points.toLocaleString('es-CL')}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Partidos</div>
                  <div className="text-base font-bold text-navy-900">{topThree[1].matchesPlayed}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Efectividad</div>
                  <div className="text-base font-bold text-emerald-600">{topThree[1].winRate}%</div>
                </div>
              </div>
            </div>

            {/* 1st Place (Gold / Leader) - Elevated */}
            <div
              onClick={() => onSelectPlayer(topThree[0])}
              className="order-1 md:order-2 cursor-pointer bg-gradient-to-b from-brand-50 to-white p-7 rounded-3xl border-2 border-brand-500 shadow-xl hover:shadow-glow transition-all transform hover:-translate-y-2 group relative overflow-hidden md:-mt-6"
            >
              <div className="absolute top-0 right-0 bg-brand-500 text-white text-[11px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider flex items-center gap-1 shadow-sm">
                <Trophy className="w-3.5 h-3.5 text-neon-lime" />
                <span>Líder Regional</span>
              </div>
              <div className="flex items-center gap-4 mb-4 mt-2">
                <div className="w-20 h-20 rounded-2xl overflow-hidden bg-brand-100 border-2 border-brand-400 p-0.5 flex-shrink-0 shadow-md">
                  {topThree[0].image ? (
                    <img src={topThree[0].image} alt={topThree[0].name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform" />
                  ) : (
                    <div className="w-full h-full rounded-xl flex items-center justify-center bg-brand-200 text-brand-700 font-bold text-2xl">
                      {topThree[0].name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 text-amber-500 font-bold text-xs uppercase tracking-wider">
                    <Award className="w-4 h-4 fill-amber-400" />
                    <span>#1 Ranking APACHI</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {topThree[0].name}
                  </h3>
                  <p className="text-xs text-slate-600">{topThree[0].club} • {topThree[0].city}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-brand-100 text-center">
                <div>
                  <div className="text-xs text-slate-500 font-medium">Puntos</div>
                  <div className="text-lg font-black text-brand-600">{topThree[0].points.toLocaleString('es-CL')}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">PJ (PG/PP)</div>
                  <div className="text-base font-bold text-navy-900">{topThree[0].matchesPlayed} <span className="text-xs text-slate-400">({topThree[0].wins}/{topThree[0].losses})</span></div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Efectividad</div>
                  <div className="text-base font-black text-emerald-600">{topThree[0].winRate}%</div>
                </div>
              </div>
            </div>

            {/* 3rd Place (Bronze) */}
            <div
              onClick={() => onSelectPlayer(topThree[2])}
              className="order-3 cursor-pointer bg-gradient-to-b from-white to-slate-50 p-6 rounded-2xl border-2 border-amber-800/20 shadow-md hover:shadow-xl hover:border-amber-700/40 transition-all transform hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-amber-100 text-amber-900 flex items-center justify-center font-extrabold text-sm border border-amber-300">
                #3
              </div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                  {topThree[2].image ? (
                    <img src={topThree[2].image} alt={topThree[2].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-600 font-bold text-lg">
                      {topThree[2].name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">3er Puesto</span>
                  <h3 className="text-lg font-extrabold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {topThree[2].name}
                  </h3>
                  <p className="text-xs text-slate-500">{topThree[2].club}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-200/80 text-center">
                <div>
                  <div className="text-xs text-slate-500">Puntos</div>
                  <div className="text-base font-extrabold text-brand-600">{topThree[2].points.toLocaleString('es-CL')}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Partidos</div>
                  <div className="text-base font-bold text-navy-900">{topThree[2].matchesPlayed}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Efectividad</div>
                  <div className="text-base font-bold text-emerald-600">{topThree[2].winRate}%</div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Main Ranking Table Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-card-subtle overflow-hidden">
          
          {/* Table Controls / Info Strip */}
          <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2 bg-slate-50/60">
            <div>
              Mostrando <span className="font-bold text-navy-900">{rankingData.length}</span> jugadores en{' '}
              <span className="font-bold text-brand-600">
                {categories.find((c) => c.id === selectedCategory)?.name || selectedCategory}
              </span>
              {selectedGender !== 'ALL' && ` (${selectedGender === 'M' ? 'Masculino' : 'Femenino'})`}
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Puntaje Activo 2026</span>
              </span>
              <span>•</span>
              <span>Ordenado por: <span className="font-bold text-navy-900 uppercase">{sortBy} ({sortOrder})</span></span>
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/80 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-slate-600">
                  <th className="py-3.5 pl-6 pr-3 w-16 text-center">
                    <button onClick={() => handleSort('rank')} className="flex items-center justify-center gap-1 hover:text-navy-900">
                      <span>#</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="py-3.5 px-3">Jugador / Club</th>
                  <th className="py-3.5 px-3 text-center">Cat.</th>
                  <th className="py-3.5 px-3 text-right">
                    <button onClick={() => handleSort('points')} className="inline-flex items-center gap-1 hover:text-brand-600 ml-auto">
                      <span>Puntos</span>
                      <ArrowUpDown className="w-3 h-3 text-brand-500" />
                    </button>
                  </th>
                  <th className="py-3.5 px-3 text-center">
                    <button onClick={() => handleSort('matchesPlayed')} className="inline-flex items-center gap-1 hover:text-navy-900">
                      <span>PJ</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="py-3.5 px-3 text-center">
                    <button onClick={() => handleSort('wins')} className="inline-flex items-center gap-1 hover:text-navy-900">
                      <span>PG</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="py-3.5 px-3 text-center">PP</th>
                  <th className="py-3.5 px-3 text-center">
                    <button onClick={() => handleSort('winRate')} className="inline-flex items-center gap-1 hover:text-navy-900">
                      <span>% Efic.</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </button>
                  </th>
                  <th className="py-3.5 px-3 text-center">Racha</th>
                  <th className="py-3.5 pr-6 pl-3 text-right">Detalle</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {loading ? (
                  // Skeleton loader
                  Array.from({ length: 6 }).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td className="py-4 pl-6 pr-3 text-center">
                        <div className="w-6 h-6 bg-slate-200 rounded-full mx-auto" />
                      </td>
                      <td className="py-4 px-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-slate-200 rounded-xl" />
                          <div className="space-y-1.5">
                            <div className="w-32 h-4 bg-slate-200 rounded" />
                            <div className="w-20 h-3 bg-slate-100 rounded" />
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-3 text-center">
                        <div className="w-12 h-5 bg-slate-200 rounded-full mx-auto" />
                      </td>
                      <td className="py-4 px-3 text-right">
                        <div className="w-16 h-5 bg-slate-200 rounded ml-auto" />
                      </td>
                      <td className="py-4 px-3 text-center"><div className="w-8 h-4 bg-slate-200 rounded mx-auto" /></td>
                      <td className="py-4 px-3 text-center"><div className="w-8 h-4 bg-slate-200 rounded mx-auto" /></td>
                      <td className="py-4 px-3 text-center"><div className="w-8 h-4 bg-slate-200 rounded mx-auto" /></td>
                      <td className="py-4 px-3 text-center"><div className="w-14 h-4 bg-slate-200 rounded mx-auto" /></td>
                      <td className="py-4 px-3 text-center"><div className="w-20 h-4 bg-slate-200 rounded mx-auto" /></td>
                      <td className="py-4 pr-6 pl-3 text-right"><div className="w-16 h-7 bg-slate-200 rounded ml-auto" /></td>
                    </tr>
                  ))
                ) : rankingData.length === 0 ? (
                  <tr>
                    <td colSpan={10} className="py-12 text-center text-slate-500">
                      <User className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                      <p className="font-semibold text-base text-navy-900">No se encontraron jugadores con los filtros seleccionados</p>
                      <p className="text-xs text-slate-500 mt-1">Prueba cambiando la categoría, el género o los términos de búsqueda.</p>
                      <button
                        onClick={() => {
                          setSelectedCategory('ALL');
                          setSelectedGender('ALL');
                          setSearchQuery('');
                        }}
                        className="mt-4 px-4 py-2 bg-brand-50 text-brand-600 font-bold text-xs rounded-lg hover:bg-brand-100 transition-colors"
                      >
                        Restablecer Filtros
                      </button>
                    </td>
                  </tr>
                ) : (
                  rankingData.map((player) => {
                    const isGold = player.rank === 1;
                    const isSilver = player.rank === 2;
                    const isBronze = player.rank === 3;

                    return (
                      <tr
                        key={player.id}
                        onClick={() => onSelectPlayer(player)}
                        className="hover:bg-brand-50/40 transition-colors cursor-pointer group"
                      >
                        {/* Rank Position */}
                        <td className="py-3.5 pl-6 pr-3 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <span
                              className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs ${
                                isGold
                                  ? 'bg-amber-400 text-white shadow-sm'
                                  : isSilver
                                  ? 'bg-slate-300 text-slate-800'
                                  : isBronze
                                  ? 'bg-amber-700/80 text-white'
                                  : 'text-slate-600 bg-slate-100'
                              }`}
                            >
                              {player.rank}
                            </span>
                            {/* Trend arrow */}
                            <span title={`Anterior: #${player.previousRank}`}>
                              {player.trend === 'up' && (
                                <ArrowUp className="w-3 h-3 text-emerald-500" />
                              )}
                              {player.trend === 'down' && (
                                <ArrowDown className="w-3 h-3 text-rose-500" />
                              )}
                              {player.trend === 'stable' && (
                                <Minus className="w-3 h-3 text-slate-300" />
                              )}
                            </span>
                          </div>
                        </td>

                        {/* Player name & club */}
                        <td className="py-3.5 px-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex-shrink-0">
                              {player.image ? (
                                <img src={player.image} alt={player.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center bg-brand-100 text-brand-700 font-bold text-sm">
                                  {player.name.charAt(0)}
                                </div>
                              )}
                            </div>
                            <div>
                              <div className="font-bold text-navy-900 group-hover:text-brand-600 transition-colors flex items-center gap-1.5">
                                <span>{player.name}</span>
                                {player.points >= 1500 && (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-500" title="Verificado APACHI" />
                                )}
                              </div>
                              <div className="text-xs text-slate-500 flex items-center gap-2">
                                <span>{player.club}</span>
                                <span>•</span>
                                <span className="text-[11px] text-slate-400">{player.position} ({player.hand})</span>
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Category & Gender Badge */}
                        <td className="py-3.5 px-3 text-center">
                          <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {player.category} {player.gender === 'F' ? 'Fem' : 'Masc'}
                          </span>
                        </td>

                        {/* Points */}
                        <td className="py-3.5 px-3 text-right">
                          <div className="font-black text-brand-600 text-sm sm:text-base font-display">
                            {player.points.toLocaleString('es-CL')}
                          </div>
                          <div className="text-[10px] text-slate-400">PTS</div>
                        </td>

                        {/* Matches Played */}
                        <td className="py-3.5 px-3 text-center font-bold text-navy-900">
                          {player.matchesPlayed}
                        </td>

                        {/* Wins */}
                        <td className="py-3.5 px-3 text-center font-bold text-emerald-600">
                          {player.wins}
                        </td>

                        {/* Losses */}
                        <td className="py-3.5 px-3 text-center font-medium text-rose-500">
                          {player.losses}
                        </td>

                        {/* Win Rate with progress bar */}
                        <td className="py-3.5 px-3 text-center">
                          <div className="inline-block text-left w-20">
                            <div className="text-xs font-bold text-navy-900 text-center mb-1">
                              {player.winRate}%
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  player.winRate >= 70
                                    ? 'bg-emerald-500'
                                    : player.winRate >= 50
                                    ? 'bg-brand-500'
                                    : 'bg-amber-500'
                                }`}
                                style={{ width: `${player.winRate}%` }}
                              />
                            </div>
                          </div>
                        </td>

                        {/* Form (Recent 5) */}
                        <td className="py-3.5 px-3 text-center">
                          <div className="flex items-center justify-center gap-1">
                            {player.recentForm.map((result, idx) => (
                              <span
                                key={idx}
                                className={`w-4 h-4 rounded-full text-[9px] font-bold flex items-center justify-center text-white ${
                                  result === 'W' ? 'bg-emerald-500' : 'bg-rose-500'
                                }`}
                                title={result === 'W' ? 'Victoria' : 'Derrota'}
                              >
                                {result}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* Action CTA */}
                        <td className="py-3.5 pr-6 pl-3 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectPlayer(player);
                            }}
                            className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-brand-500 hover:text-white text-slate-700 text-xs font-semibold transition-all inline-flex items-center gap-1"
                          >
                            <span>Ficha</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          {meta && meta.totalPages > 1 && (
            <div className="px-6 py-4 border-t border-slate-200 flex items-center justify-between bg-slate-50/50 text-xs">
              <span className="text-slate-500">
                Página {meta.page} de {meta.totalPages} ({meta.total} jugadores en total)
              </span>
              <div className="flex items-center gap-1">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage(currentPage - 1)}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                {Array.from({ length: meta.totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-7 h-7 rounded-lg font-bold text-xs ${
                      currentPage === i + 1
                        ? 'bg-brand-500 text-white'
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  disabled={currentPage >= meta.totalPages}
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 disabled:opacity-40 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

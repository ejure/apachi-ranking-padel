import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import RankingSection from './components/RankingSection';
import RegistrationSection from './components/RegistrationSection';
import EventsSection from './components/EventsSection';
import FepachiBanner from './components/FepachiBanner';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';
import PlayerModal from './components/PlayerModal';
import ApiSimulatorDrawer from './components/ApiSimulatorDrawer';
import { Code2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [isApiDrawerOpen, setIsApiDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handlePlayerRegistered = (newPlayer) => {
    setToastMessage(`¡${newPlayer.name} registrado con éxito en categoría ${newPlayer.category}!`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 p-4 rounded-2xl bg-navy-900 text-white border border-brand-500/40 shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-neon-lime" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Floating API Console Trigger Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          onClick={() => setIsApiDrawerOpen(true)}
          className="flex items-center space-x-2.5 px-4 py-3 rounded-2xl bg-navy-900/90 hover:bg-brand-600 text-white font-mono text-xs shadow-2xl backdrop-blur-md border border-white/20 hover:border-brand-400 transition-all transform hover:scale-105 active:scale-95 group"
          title="Abrir consola de simulación e integración de API"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <Code2 className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors" />
          <span className="font-bold">Simulador API REST</span>
        </button>
      </div>

      {/* Main Navigation */}
      <Navbar onOpenApiDrawer={() => setIsApiDrawerOpen(true)} />

      {/* Hero Section */}
      <Hero onExploreRanking={() => {
        const el = document.getElementById('ranking');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* About Section: ranking APACHI & Steps 01 to 04 */}
      <AboutSection />

      {/* Core Ranking Section (Live Interactive Table & Filters) */}
      <RankingSection
        onSelectPlayer={(player) => setSelectedPlayer(player)}
        onOpenApiDrawer={() => setIsApiDrawerOpen(true)}
      />

      {/* Events & Programming ("Conocemos tu esfuerzo" & Octubre) */}
      <EventsSection />

      {/* Registration Section ("Regístrate" form with Action Player photo) */}
      <RegistrationSection onPlayerRegistered={handlePlayerRegistered} />

      {/* FEPACHI Endorsement Banner ("Representa a tu país") */}
      <FepachiBanner />

      {/* Sponsors Section ("Agradecemos a nuestros patrocinadores") */}
      <SponsorsSection />

      {/* Footer */}
      <Footer />

      {/* Player Detailed Profile Modal */}
      {selectedPlayer && (
        <PlayerModal
          player={selectedPlayer}
          onClose={() => setSelectedPlayer(null)}
        />
      )}

      {/* Developer API Console Drawer */}
      <ApiSimulatorDrawer
        isOpen={isApiDrawerOpen}
        onClose={() => setIsApiDrawerOpen(false)}
      />
    </div>
  );
}

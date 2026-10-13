import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CalendarPrioritySection from './components/CalendarPrioritySection';
import InstagramFeedSection from './components/InstagramFeedSection';
import RankingSection from './components/RankingSection';
import AboutSection from './components/AboutSection';
import FepachiBanner from './components/FepachiBanner';
import SponsorsSection from './components/SponsorsSection';
import Footer from './components/Footer';

export default function App() {
  const scrollToCalendar = () => {
    const el = document.getElementById('calendario');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRanking = () => {
    const el = document.getElementById('ranking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with clean background */}
      <Hero
        onExploreCalendar={scrollToCalendar}
        onExploreRanking={scrollToRanking}
      />

      {/* 1. TOP PRIORITY: Calendario Oficial de Eventos de Octubre (Exhibición, Clínicas, Psicología) */}
      <CalendarPrioritySection />

      {/* 2. Instagram & Comunidad (@rankingapachi.cl) */}
      <InstagramFeedSection />

      {/* 3. Ranking Oficial APACHI (Próximamente / En Preparación) */}
      <RankingSection />

      {/* 4. Sobre el Circuito APACHI (Pasos y Pilares) */}
      <AboutSection />

      {/* 5. Aval Federado Nacional FEPACHI */}
      <FepachiBanner />

      {/* 6. Patrocinadores Oficiales */}
      <SponsorsSection />

      {/* 7. Footer Institucional */}
      <Footer />
    </div>
  );
}

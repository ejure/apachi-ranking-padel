import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import CalendarSection from './components/CalendarSection';
import GuestsSection from './components/GuestsSection';
import AboutSection from './components/AboutSection';
import RankingSection from './components/RankingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <CalendarSection />
        <GuestsSection />
        <AboutSection />
        <RankingSection />
      </main>
      <Footer />
    </>
  );
}

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CalendarSection from './components/CalendarSection';
import AboutSection from './components/AboutSection';
import RankingSection from './components/RankingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CalendarSection />
        <AboutSection />
        <RankingSection />
      </main>
      <Footer />
    </>
  );
}

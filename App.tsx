import React from 'react';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Onboarding from './components/Onboarding';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] overflow-x-hidden selection:bg-[#007AFF] selection:text-white">
      <nav className="fixed top-0 inset-x-0 z-50 h-16 flex items-center justify-between px-6 bg-white/70 backdrop-blur-xl border-b border-white/20">
        <div className="font-bold text-lg tracking-tight text-[#001D3D]">OmniStrike<span className="text-[#007AFF]">.ai</span></div>
        <button 
          className="text-sm font-medium text-[#007AFF] hover:opacity-80 transition-opacity"
          onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth'})}
        >
          Tarifs
        </button>
      </nav>

      <main>
        <Hero />
        <BentoGrid />
        <Onboarding />
        <div id="pricing">
          <Pricing />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
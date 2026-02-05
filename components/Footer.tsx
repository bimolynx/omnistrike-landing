import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-gray-500 tracking-wide">
          OmniStrike AI — L'omniprésence par l'IA
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Confidentialité</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Mentions Légales</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Contact</a>
        </div>
        <div className="mt-8 text-[10px] text-gray-300">
          Powered by Gemini 3 Pro & Veo 3.1
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-200 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-medium text-gray-500 tracking-wide">
          OmniStrike AI — L'omniprésence par l'IA
        </p>
        
        {/* Social Links */}
        <div className="mt-6 flex justify-center items-center space-x-6">
           <a 
            href="https://instagram.com/omnistrike.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-xl flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform duration-300"
            aria-label="Contactez-nous sur Instagram"
           >
             <Instagram size={20} />
           </a>
        </div>

        <div className="mt-6 flex justify-center space-x-6">
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Confidentialité</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Mentions Légales</a>
          <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">Contact</a>
        </div>
        <div className="mt-8 text-[10px] text-gray-300">
          Powered by Gemini 3 Pro & Veo 3.1
        </div>
      </div>
    </footer>
  );
};

export default Footer;

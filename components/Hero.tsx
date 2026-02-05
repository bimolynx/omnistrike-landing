import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToOnboarding = () => {
    document.getElementById('onboarding')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 md:px-6 overflow-hidden pt-20">
      {/* Background ambient glow - very subtle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md border border-gray-200/50 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 mb-6 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#007AFF] animate-pulse"></span>
          <span>Nouveau : Moteur Veo 3.1 Disponible</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#001D3D] leading-tight">
          Multipliez votre présence. <br />
          <span className="text-[#007AFF] bg-clip-text">Divisez votre effort.</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
          Transformez automatiquement une vidéo longue en 30 contenus haute performance. 
          Propulsé par Gemini Pro et Veo.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
          <Button onClick={scrollToOnboarding} size="lg" className="w-full md:w-auto group">
            Démarrer l'audit gratuit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="pt-12 flex flex-col items-center space-y-6">
           {/* Trustpilot Style Widget */}
           <div className="flex flex-col items-center space-y-2 group cursor-pointer">
              <div className="flex items-center space-x-1">
                 {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="bg-[#00B67A] p-1 rounded-[2px] shadow-sm">
                      <Star className="w-4 h-4 text-white fill-white" strokeWidth={0} />
                    </div>
                 ))}
              </div>
              <div className="text-sm text-gray-600">
                  <span className="font-bold text-[#001D3D]">4.9/5</span> Excellent sur <span className="font-semibold text-[#001D3D]">Trustpilot</span>
              </div>
           </div>

           <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">ILS NOUS FONT CONFIANCE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
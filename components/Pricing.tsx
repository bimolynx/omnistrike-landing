import React from 'react';
import { Button } from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      title: "Offre Basic : Starter Insta",
      price: "390€",
      features: [
        "5 Réels Instagram (Montage + Publi)",
        "Sous-titres dynamiques",
        "Audio tendance"
      ]
    },
    {
      title: "Offre Intermédiaire : Multi-Canal",
      price: "790€",
      features: [
        "10 Vidéos courtes",
        "Déclinaison Insta, TikTok, Shorts",
        "Publication programmée"
      ]
    },
    {
      title: "Offre Premium : OmniStrike",
      price: "1 490€",
      features: [
        "30 Clips viraux (TikTok/Reels/Shorts)",
        "Rédaction de 10 Posts LinkedIn",
        "4 Newsletters Hebdomadaires",
        "Génération Vidéo Veo Illimitée (B-Rolls)",
        "Account Manager dédié",
        "Livraison sous 48h"
      ]
    }
  ];

  return (
    <section className="py-24 px-4 bg-[#F5F5F7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001D3D] mb-4">Tarification Simple</h2>
          <p className="text-gray-500 text-lg">Choisissez le niveau d'impact qui vous convient.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[32px] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden group"
            >
              {/* Subtle top highlight for Premium */}
              {index === 2 && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#007AFF] to-blue-400" />
              )}

              <div className="mb-6 min-h-[64px]">
                <h3 className="text-xl font-semibold text-gray-700 leading-snug max-w-[80%]">
                  {plan.title}
                </h3>
              </div>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-[#001D3D] tracking-tight">{plan.price}</span>
                <span className="text-gray-400 ml-2 font-medium">/mois</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-[#007AFF] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full py-4 text-base shadow-none hover:shadow-md" 
                onClick={() => document.getElementById('onboarding')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Commencer maintenant
              </Button>
            </div>
          ))}
        </div>
        
        <p className="text-center text-sm text-gray-400 mt-12 font-medium">Sans engagement. Pausez quand vous voulez.</p>
      </div>
    </section>
  );
};

export default Pricing;
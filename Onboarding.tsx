import React, { useState } from 'react';
import { Button } from './ui/Button';
import { OnboardingState } from '../types';
import { Check, X } from 'lucide-react';

const Onboarding: React.FC = () => {
  const [state, setState] = useState<OnboardingState>({
    step: 1,
    videoCount: null,
    revenue: '',
    socialHandle: '',
    isQualified: true,
    isCompleted: false
  });

  const handleStep1 = (count: number) => {
    if (count < 2) {
      setState(prev => ({ ...prev, videoCount: count, isQualified: false, isCompleted: true }));
    } else {
      setState(prev => ({ ...prev, videoCount: count, step: 2 }));
    }
  };

  const handleStep2 = (rev: string) => {
    setState(prev => ({ ...prev, revenue: rev, step: 3 }));
  };

  const handleStep3 = () => {
    // Here we would submit the data to backend
    setState(prev => ({ ...prev, isCompleted: true }));
  };

  const ProgressBar = () => (
    <div className="w-full h-1 bg-gray-200 rounded-full mb-8 overflow-hidden">
      <div 
        className="h-full bg-[#007AFF] transition-all duration-500 ease-out"
        style={{ width: `${state.isCompleted ? 100 : (state.step - 1) * 33}%` }}
      />
    </div>
  );

  return (
    <section id="onboarding" className="py-24 px-4 relative">
       <div className="max-w-xl mx-auto glass rounded-3xl p-8 md:p-12 shadow-2xl border border-white/60 relative overflow-hidden min-h-[400px] flex flex-col justify-center">
         
         {!state.isCompleted && <ProgressBar />}

         <div className="transition-all duration-500">
           {/* STEP 1: VIDEO VOLUME */}
           {state.step === 1 && !state.isCompleted && (
             <div className="space-y-6 animate-fade-in">
               <h3 className="text-2xl md:text-3xl font-bold text-[#001D3D] text-center">Combien de vidéos longues produisez-vous par mois ?</h3>
               <div className="grid grid-cols-1 gap-3">
                 <Button onClick={() => handleStep1(0)} variant="secondary" className="justify-between group">
                   0 - 1 vidéo <span className="text-gray-400 text-sm group-hover:text-[#007AFF]">Débutant</span>
                 </Button>
                 <Button onClick={() => handleStep1(4)} variant="secondary" className="justify-between group">
                   2 - 4 vidéos <span className="text-gray-400 text-sm group-hover:text-[#007AFF]">Régulier</span>
                 </Button>
                 <Button onClick={() => handleStep1(8)} variant="secondary" className="justify-between group">
                   5+ vidéos <span className="text-gray-400 text-sm group-hover:text-[#007AFF]">Pro</span>
                 </Button>
               </div>
             </div>
           )}

           {/* STEP 2: REVENUE */}
           {state.step === 2 && !state.isCompleted && (
             <div className="space-y-6 animate-fade-in">
               <h3 className="text-2xl md:text-3xl font-bold text-[#001D3D] text-center">Quel est votre CA mensuel actuel ?</h3>
               <div className="grid grid-cols-1 gap-3">
                 <Button onClick={() => handleStep2('0-2k')} variant="secondary" className="justify-start">0 - 2k€</Button>
                 <Button onClick={() => handleStep2('2k-5k')} variant="secondary" className="justify-start">2k - 5k€</Button>
                 <Button onClick={() => handleStep2('5k-20k')} variant="secondary" className="justify-start">5k - 20k€</Button>
                 <Button onClick={() => handleStep2('20k+')} variant="secondary" className="justify-start">20k+ €</Button>
               </div>
             </div>
           )}

           {/* STEP 3: SOCIAL HANDLE */}
           {state.step === 3 && !state.isCompleted && (
             <div className="space-y-6 animate-fade-in">
               <h3 className="text-2xl md:text-3xl font-bold text-[#001D3D] text-center">Où pouvons-nous voir votre contenu ?</h3>
               <p className="text-center text-gray-500 text-sm">Nous réaliserons un échantillon gratuit avant notre premier appel.</p>
               <input 
                 type="text" 
                 placeholder="@votre_compte (Instagram/TikTok)"
                 className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#007AFF] focus:border-transparent outline-none bg-white/50 text-lg"
                 value={state.socialHandle}
                 onChange={(e) => setState(prev => ({...prev, socialHandle: e.target.value}))}
               />
               <Button onClick={handleStep3} disabled={!state.socialHandle} className="w-full">
                 Terminer l'analyse
               </Button>
             </div>
           )}

           {/* COMPLETION STATE */}
           {state.isCompleted && (
             <div className="text-center space-y-6 animate-fade-in">
               {state.isQualified ? (
                 <>
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 mb-4">
                     <Check size={40} />
                   </div>
                   <h3 className="text-3xl font-bold text-[#001D3D]">Profil Validé</h3>
                   <p className="text-gray-500">
                     Félicitations. Votre volume de contenu est idéal pour OmniStrike. <br/>
                     Un expert va analyser votre compte <strong>{state.socialHandle}</strong> et vous contacter sous 24h.
                   </p>
                   <Button className="mt-4" onClick={() => window.location.reload()}>Retour à l'accueil</Button>
                 </>
               ) : (
                 <>
                   <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto text-orange-600 mb-4">
                     <X size={40} />
                   </div>
                   <h3 className="text-2xl font-bold text-[#001D3D]">Pas tout de suite...</h3>
                   <p className="text-gray-500">
                     Nous recommandons d'avoir un flux régulier d'au moins 2 vidéos longues par mois avant d'utiliser OmniStrike pour garantir un ROI positif.
                   </p>
                   <p className="text-sm text-gray-400 mt-4">
                     Revenez nous voir quand votre production aura augmenté !
                   </p>
                 </>
               )}
             </div>
           )}
         </div>
       </div>
    </section>
  );
};

export default Onboarding;
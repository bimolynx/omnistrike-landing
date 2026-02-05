import React from 'react';
import { Video, Linkedin, Mail, Sparkles } from 'lucide-react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001D3D] tracking-tight mb-4">L'Omniprésence Unifiée</h2>
        <p className="text-gray-500 max-w-xl mx-auto">Un seul fichier source. Des dizaines de points de contact. Une cohérence parfaite.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Large Card */}
        <div className="md:col-span-2 row-span-2 glass rounded-3xl p-8 transition-all hover:scale-[1.01] duration-300 shadow-sm border-white/40 group relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <Video size={120} />
          </div>
          <div className="relative z-10 mb-6">
            <div className="bg-blue-50 w-12 h-12 rounded-2xl flex items-center justify-center text-[#007AFF] mb-6">
              <Video size={24} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Shorts, Reels & TikToks Viraux</h3>
            <p className="text-gray-500 leading-relaxed">
              Notre IA analyse les moments forts, recadre dynamiquement en vertical (9:16) et ajoute des sous-titres animés captivants. 
              Génération vidéo via <span className="font-semibold text-[#007AFF]">Veo 3.1</span> pour les B-Rolls manquants.
            </p>
          </div>
          
          {/* Image Container - Clean, High Fidelity, No Overlay */}
          <div className="relative z-10 mt-auto w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-500 bg-white">
            {/* 
               IMPORTANT: Remplacez l'URL src ci-dessous par le chemin de votre image finale.
               L'effet 'mix-blend-overlay' a été retiré pour que l'image soit en pleine couleur.
            */}
            <img 
               src="https://lh3.googleusercontent.com/rd-gg/AMW1TPrTkzj6jxT2CmuN12yI6FYibk4n-FoQA93OgMpgSmRxO-KLtojssGjHCvGFCdn9SrbiSRTGBEKqvuDcZeY7j9SB2UOmW6yXoZVUAEYOHmaLWOR0pzV53OteJ54cp7yhhIiN7ttjmb295xrXkxZv3Q1xovd8DR_X34s9QbWBxIe6prUoCc0V_DyMWHhkYICld-d_uzKdFfw_w5IFvRckM0jYAzUNdW90w4ZNHucXUbPY_bVzXwtO8_j-lzO0fqyyzd5ZCVo3AP2YELpC3SPX-yrU56pdSuZ717GGE5gUicnu6GzNxb5evjaGZUP93X_UcwvyYJF6YhUqq4ms_gMoOx_xTVfO19da6tUVrdPGH6csI5TSgNXuv7DW4I7NyujNKLF8n5siktQm7NCJKiFL3qYKK8ARM3NUe4WTWOClyy-3xmZOJK5IKckseYuHaof-fh56_Uzj3wNFCOLGF361NXtRw57iqZOztbEXiyhEFFQeZ7Gfd7M1avmACN8TxLmu1rybWuEWo3bHukBNW-e1EaLsp9gjcLKtnyO305Br9UU3trKjxHywOkYlom3CohRNKoSEh9-xkMepVEDcUeKe8BLXswEleMhRFS3wOs0SLOQTWvSkX90hrUI9n53EsZw2FX5euSLZaYFavqSxWzTPC2muo7KdnKKh9ifnE7fH1hMo29QJLlVaY3lQiEG1lcp-OJLrjhqFomjKdH9ZLUxQIvoJV64Y1IYlFxn5k8Gn9uzwT_cz1dkPqJefglmXnmMe-aT0tkTpQRauOI_BTWNm17wTbjrj7rmcR17MsdODqlGXx0vnfKTnw0Lyhh1RklzYD-nnoCg6bVRNVTEXHkO6RoZNVh43epO4hofLiWFkccxB8FOH6-7Nh88-So8L3pDcNpHa4a0xnNFL6lmjpJ8PNrVOU4lPt1_1cZTrnCeO-5CCXGihf8qFaAFdb8Y72MkrbPc-EyDGivSzpo_4r1BMCyDgexH4wYiCG5C19CTtRJiKZkk8epEyyuXlFRc6W8RTrI8-Ibf931GZ1rd546ukE1ndRAbg1VRbSMt9dkwixDfKlfN9KCabUJmqJ4fRIF9I-EsEp9AMegjd--eKF--9hhAy24pNYfzzKNzwwOVLUNvss-l5NCS1ljkkcaVAM2gBLKzwsBq6jJ_A350e622oJS4ucBMtcwsOXxIlt4MSxaDwivmKk_yx1XNq4ln4iDumQCA_lAJscDERpLSpIFmNVN3LFKxKTwde6XioEZwQmiTsqhqzZ2cB-g36bHUahz_-s2a91e_tfLCTOMolVC2fDRENNVAKajjD-jAd0vp1C30XEejewNdgXoARsnXJtV-FS4vy6lPmSyi7Lj0JzW_2J_fQawN5wvBPnLMG7IVIe8ffJDLDNZGX1PDgQaqezorNi28oWHSBPOEHRw78297_Ez-MakR_F8U-9raoBqK0F1ePA4BeYovZVj--CVkWQpK4RXWVabFLa1uxeiUaMzv5PAUoRXeup7gi4IXRe-QfqPELFbIpjtApLxvF6tFwuOlq-wmC5PajZJRRuA=s1024-rj" 
               alt="Statistiques virales TikTok et Instagram Reels" 
               className="w-full h-auto object-cover" 
             />
             {/* Bordure interne subtile pour le contraste */}
             <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none"></div>
          </div>
        </div>

        {/* LinkedIn Card */}
        <div className="glass rounded-3xl p-8 transition-all hover:scale-[1.01] duration-300 shadow-sm border-white/40">
           <div className="bg-blue-900/10 w-12 h-12 rounded-2xl flex items-center justify-center text-[#001D3D] mb-6">
            <Linkedin size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Posts LinkedIn</h3>
          <p className="text-gray-500 text-sm">
            Transformation du script vidéo en carrousels éducatifs et posts textuels engageants.
          </p>
        </div>

        {/* Newsletter Card */}
        <div className="glass rounded-3xl p-8 transition-all hover:scale-[1.01] duration-300 shadow-sm border-white/40">
           <div className="bg-orange-50 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
            <Mail size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">Newsletters</h3>
          <p className="text-gray-500 text-sm">
            Rédaction automatique d'une newsletter structurée résumant les points clés de votre vidéo.
          </p>
        </div>

        {/* AI Intelligence Card */}
        <div className="md:col-span-3 glass rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 transition-all hover:scale-[1.005] duration-300 shadow-sm border-white/40 bg-gradient-to-r from-white/60 to-blue-50/30">
          <div className="flex-1">
             <div className="flex items-center space-x-3 mb-4">
                <div className="bg-indigo-50 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-600">
                  <Sparkles size={20} />
                </div>
                <h3 className="text-xl font-bold">Moteur Gemini 3 Pro</h3>
             </div>
             <p className="text-gray-500 max-w-2xl">
               Nous utilisons la dernière génération de modèles multimodaux pour comprendre le contexte, l'humour et les nuances de votre contenu. C'est plus qu'un découpage, c'est une réinterprétation intelligente.
             </p>
          </div>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-500 border">1M Context Window</span>
            <span className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-500 border">Multimodal</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
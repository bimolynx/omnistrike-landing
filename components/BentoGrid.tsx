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
               src="https://lh3.googleusercontent.com/rd-gg/AMW1TPq2Syt11dycnS_JcUKrWi00ipMJtmqYGIkBMCnvEWrrDtnwZWd-6upSQFBYnO_AaH0MtEfihNmzEYFHxtKpB9ZA4-Z2jJAXpxLw-24_s48g8k7sjx3Fr424fymuQttkzsG4uXJo3bz7DFxDspvylya_yShiseCMxjTza5nQmLBo6hPbSGiwd_9pFiwfbJDH05FSH9Dmk8B2KOj4hNAII3LqiPYQnbjCLI1e1LrJ0iEiBBHEYB916Q5cLB-7rkn5sw4RzaVMXNJtJtNhR_EQzGo3JS8Evk0lqWngfOMImThGrcBdOcivj-pI0abQMPL1_t9LlVJySYuBlSLvbUgy9_ghhEYAk3Bve7U6OMO51rAIxSB5BYTlskA2StL13r775vSD7Xygv9UyUCkf9Rn6XbK9ZFiZY2hrKtkLOKvKzR3dXPxmNCRX1QGtETHyZE11KrbX629GyaSdzZrxo5t_lNhtkPuW2eUF_dGcj6_mFfOvhMpnHDkRt6yKzrob9YlIdg4NGnOXjnF2pRE1e1kwf49QkLpZw76t13BmbgWMmcaGUXedTIigDIN3OhRfvEqinj7Eo0y2TzFg-ARTRLqR2PLEgMI_BOu6mGLJzx8ebBbv66h65sQ04GgOaiBg2kNK2knOp1adMYfvYbSWQzf05GiDZ3kf9YVp_HFu-k4ccHHIkCVAhP9a3YwU3eap3KvcfQyU9UcsE30LQixAzeGRPjhv_4wGVl2bpaIhKKs6OgVVoA_3cUjuHD4NET1aohAxG53mg8KIDu17oqYv7vuV6TA2j_zvW4aXhH2J7bdOMKsojet8ew4m84JKLwWhYhVf8Vupjpp0pxLaXLBl8jTJG0h3mJMAZMXVOMOjhXorRXhPrAKlatirj-E-TwbGY1ANKityOwPsK7tuFFTolQUXk4X-UgHNCuPIq0zddoV833MnptXRL-5N3kBAKVMlp7cqLOpzyzMAuBB33WL8xNEluNNCerxHXrBMePzPfNzwMYvINDo0_CGj9YKHKie24MKUPUvuTU16M5g0bX3mxB4QPi1dUqaTTIartcb40cslSa1yHZnObFku76243tNrzphdPiHBVAlmTrtDveM-lVsVZMQFAqQ8Pas4GKAb4vcgmGB1ZCDk_-ouaD6vnhGdhoIG8eWe5GN1o_3MbrHmwM-GNDr9MIsJe__atQYUrIWwbEgfmjY9uu5imOQ8v3hM0-lT2sptxQ1M3lSgAJXXHEKRm0HFTJez2b_fxCkz_s4bLjp2WggLH89KYryikEFe9aza18SjtiO1cA3IamQ77N1Ba0phUxnswC4-PoyapVXoe4zSfH5-drjL71_r1FB1OljOPmuuXZeANYzxuc1KLjzVcAFCKyyhdScjpBEmIEarbSnG-wDVwSpQO6ofwaylkLYw2Q9jp9CpThfiW7ug9COr-5znWUIIDJkruqZP0Ks432EeSHj85tqINTXM5h8OMsFKQI8pbJeuylMJuRi9wbGtvfnaPbskXXc3qk1cpBW80BGVYhW2YnvSNQZqxsO2Edcbtp4WWS8e2LG7_Xmb-bKK=s1024-rj" 
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

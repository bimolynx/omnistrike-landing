import React, { useState, useRef } from 'react';
import { Button } from './ui/Button';
import { ImageSize, VideoAspectRatio } from '../types';
import { generateProImage, editImage, generateVideo } from '../services/geminiService';
import { Image, Video as VideoIcon, Wand2, Loader2, Upload, Maximize2 } from 'lucide-react';

type DemoMode = 'generate-image' | 'edit-image' | 'generate-video';

const LiveDemo: React.FC = () => {
  const [mode, setMode] = useState<DemoMode>('generate-image');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  // Options
  const [imageSize, setImageSize] = useState<ImageSize>(ImageSize.SIZE_1K);
  const [videoRatio, setVideoRatio] = useState<VideoAspectRatio>(VideoAspectRatio.LANDSCAPE);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAction = async () => {
    if (!prompt) return;
    setIsLoading(true);
    setResult(null);

    try {
      let output = '';
      if (mode === 'generate-image') {
        output = await generateProImage(prompt, imageSize);
      } else if (mode === 'edit-image') {
        if (!uploadedImage) throw new Error("Veuillez uploader une image d'abord.");
        output = await editImage(uploadedImage, prompt);
      } else if (mode === 'generate-video') {
        output = await generateVideo(prompt, videoRatio);
      }
      setResult(output);
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue. Vérifiez votre clé API ou réessayez.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 px-4 bg-white/50 backdrop-blur-sm border-y border-white/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#001D3D] mb-4">Studio Créatif IA</h2>
          <p className="text-gray-500">Testez la puissance de nos modèles avant de vous engager.</p>
        </div>

        <div className="glass rounded-3xl overflow-hidden shadow-xl border border-white/50 flex flex-col md:flex-row min-h-[600px]">
          {/* Controls Sidebar */}
          <div className="w-full md:w-1/3 bg-white/40 border-r border-white/20 p-8 flex flex-col">
            <div className="flex space-x-2 mb-8 bg-gray-100/50 p-1 rounded-xl">
              <button 
                onClick={() => { setMode('generate-image'); setResult(null); }}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${mode === 'generate-image' ? 'bg-white shadow text-[#007AFF]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Image className="w-4 h-4 mx-auto mb-1" />
                Image
              </button>
              <button 
                onClick={() => { setMode('edit-image'); setResult(null); }}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${mode === 'edit-image' ? 'bg-white shadow text-[#007AFF]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <Wand2 className="w-4 h-4 mx-auto mb-1" />
                Edit
              </button>
              <button 
                onClick={() => { setMode('generate-video'); setResult(null); }}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${mode === 'generate-video' ? 'bg-white shadow text-[#007AFF]' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <VideoIcon className="w-4 h-4 mx-auto mb-1" />
                Veo
              </button>
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                  Prompt
                </label>
                <textarea 
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={
                    mode === 'generate-image' ? "Un studio minimaliste futuriste..." :
                    mode === 'edit-image' ? "Ajoute un filtre néon..." :
                    "Une vidéo cinématique d'un drone..."
                  }
                  className="w-full h-32 bg-white/50 rounded-xl border border-gray-200 p-4 text-sm focus:ring-2 focus:ring-[#007AFF] focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* Specific Controls based on mode */}
              {mode === 'generate-image' && (
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Résolution</label>
                  <select 
                    value={imageSize}
                    onChange={(e) => setImageSize(e.target.value as ImageSize)}
                    className="w-full bg-white/50 rounded-lg border border-gray-200 p-2 text-sm outline-none"
                  >
                    <option value={ImageSize.SIZE_1K}>1K Standard</option>
                    <option value={ImageSize.SIZE_2K}>2K High Res</option>
                    <option value={ImageSize.SIZE_4K}>4K Ultra</option>
                  </select>
                </div>
              )}

              {mode === 'edit-image' && (
                <div>
                   <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Image Source</label>
                   <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full h-24 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
                   >
                     {uploadedImage ? (
                       <img src={uploadedImage} alt="Upload preview" className="h-full w-full object-cover rounded-xl opacity-60" />
                     ) : (
                       <>
                        <Upload className="w-6 h-6 text-gray-400 mb-1" />
                        <span className="text-xs text-gray-400">Click to upload</span>
                       </>
                     )}
                   </div>
                   <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
                </div>
              )}

              {mode === 'generate-video' && (
                <div>
                   <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Format</label>
                   <div className="flex space-x-2">
                     <button 
                      onClick={() => setVideoRatio(VideoAspectRatio.LANDSCAPE)}
                      className={`flex-1 py-2 rounded-lg text-xs border ${videoRatio === VideoAspectRatio.LANDSCAPE ? 'border-[#007AFF] text-[#007AFF] bg-blue-50' : 'border-gray-200 text-gray-500'}`}
                     >
                       16:9 Landscape
                     </button>
                     <button 
                      onClick={() => setVideoRatio(VideoAspectRatio.PORTRAIT)}
                      className={`flex-1 py-2 rounded-lg text-xs border ${videoRatio === VideoAspectRatio.PORTRAIT ? 'border-[#007AFF] text-[#007AFF] bg-blue-50' : 'border-gray-200 text-gray-500'}`}
                     >
                       9:16 Portrait
                     </button>
                   </div>
                </div>
              )}
            </div>

            <Button 
              onClick={handleAction} 
              disabled={isLoading || (mode === 'edit-image' && !uploadedImage) || !prompt}
              className="w-full mt-6"
            >
              {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : 'Générer'}
            </Button>
          </div>

          {/* Preview Area */}
          <div className="flex-1 bg-gray-50/50 flex items-center justify-center relative p-8">
            {!result && !isLoading && (
              <div className="text-center text-gray-300">
                <Maximize2 className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Le résultat apparaîtra ici</p>
              </div>
            )}
            
            {isLoading && (
              <div className="text-center">
                 <div className="w-16 h-16 border-4 border-[#007AFF]/30 border-t-[#007AFF] rounded-full animate-spin mx-auto mb-4"></div>
                 <p className="text-gray-500 animate-pulse">L'IA travaille...</p>
                 {mode === 'generate-video' && <p className="text-xs text-gray-400 mt-2">Génération vidéo Veo (peut prendre ~1 min)</p>}
              </div>
            )}

            {result && !isLoading && (
              <div className="relative w-full h-full flex items-center justify-center animate-fade-in">
                {mode === 'generate-video' ? (
                   <video src={result} controls className="max-h-full max-w-full rounded-lg shadow-2xl" autoPlay loop />
                ) : (
                   <img src={result} alt="Generated result" className="max-h-full max-w-full rounded-lg shadow-2xl object-contain" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;
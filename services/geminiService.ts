import { GoogleGenAI } from "@google/genai";
import { ImageSize, VideoAspectRatio } from "../types";

// Removed conflicting global declaration as window.aistudio is already defined in the environment types.

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

/**
 * Generate High-Fidelity Image using Gemini 3 Pro
 */
export const generateProImage = async (prompt: string, size: ImageSize): Promise<string> => {
  // Check for paid key requirement for Pro/Veo models
  // Cast window to any to avoid type conflicts with existing window.aistudio declarations
  if ((window as any).aistudio) {
    const hasKey = await (window as any).aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await (window as any).aistudio.openSelectKey();
    }
  }

  // Create client right before call to ensure key is fresh
  const ai = getClient();
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [{ text: prompt }],
    },
    config: {
      imageConfig: {
        imageSize: size,
        aspectRatio: '1:1', // Defaulting to square for demo consistency
      }
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  
  throw new Error("No image data returned from API");
};

/**
 * Edit Image using Gemini 2.5 Flash Image (Nano Banana)
 */
export const editImage = async (base64Image: string, prompt: string): Promise<string> => {
  const ai = getClient();
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        {
          inlineData: {
            data: base64Image.split(',')[1], // Remove data:image/png;base64, prefix if present
            mimeType: 'image/png', // Assuming PNG for simplicity, could be dynamic
          },
        },
        {
          text: prompt,
        },
      ],
    },
  });

  for (const part of response.candidates?.[0]?.content?.parts || []) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }

  throw new Error("No edited image data returned");
};

/**
 * Generate Video using Veo 3.1
 */
export const generateVideo = async (prompt: string, aspectRatio: VideoAspectRatio): Promise<string> => {
  // Veo requires paid key selection
  if ((window as any).aistudio) {
    const hasKey = await (window as any).aistudio.hasSelectedApiKey();
    if (!hasKey) {
      await (window as any).aistudio.openSelectKey();
    }
  }

  const ai = getClient();
  
  // Note: generateVideos returns an Operation
  let operation = await ai.models.generateVideos({
    model: 'veo-3.1-fast-generate-preview',
    prompt: prompt,
    config: {
      numberOfVideos: 1,
      resolution: '1080p',
      aspectRatio: aspectRatio
    }
  });

  // Polling loop
  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
    operation = await ai.operations.getVideosOperation({ operation: operation });
  }

  const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
  
  if (!downloadLink) {
    throw new Error("Video generation failed or no URI returned.");
  }

  // Fetch the actual video bytes using the key
  const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
  const blob = await videoResponse.blob();
  return URL.createObjectURL(blob);
};
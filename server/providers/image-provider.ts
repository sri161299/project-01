import { ImageGenerationProvider } from "./types";
import { PollinationsImageProvider, resolvePollinationsModel } from "./pollinations-image";
import { HuggingFaceProvider } from "./huggingface-image";
import { GeminiProvider } from "./gemini-image";
import { LocalProvider } from "./local-image";

let currentRuntimeProvider: string | null = null;

export function setRuntimeProvider(provider: string | null) {
  currentRuntimeProvider = provider;
}

export function getRuntimeProvider(): string {
  if (currentRuntimeProvider) {
    return currentRuntimeProvider;
  }
  const envProvider = process.env.IMAGE_PROVIDER?.trim().toLowerCase();
  if (!envProvider || envProvider === "huggingface") {
    return "pollinations";
  }
  return envProvider;
}

export function getImageProvider(requestedProvider?: string): ImageGenerationProvider {
  const providerKey = (
    requestedProvider ||
    getRuntimeProvider()
  )
    .trim()
    .toLowerCase();

  if (providerKey === "pollinations" || providerKey === "huggingface") {
    return new PollinationsImageProvider();
  } else if (providerKey === "gemini") {
    return new GeminiProvider();
  } else if (providerKey === "local") {
    return new LocalProvider();
  } else {
    // Default to PollinationsImageProvider
    return new PollinationsImageProvider();
  }
}

export function getProviderInfo() {
  const active = getRuntimeProvider();
  return {
    activeProvider: active,
    model:
      active === "pollinations"
        ? resolvePollinationsModel()
        : active === "huggingface"
        ? process.env.HF_IMAGE_MODEL || "black-forest-labs/FLUX.1-schnell"
        : active === "gemini"
        ? "gemini-3.1-flash-image"
        : "archai-local-vector-synth",
    hasPollinationsKey: Boolean(process.env.POLLINATIONS_API_KEY?.trim()),
    hasHfToken: Boolean(process.env.HF_TOKEN?.trim()),
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY?.trim()),
    availableProviders: [
      {
        id: "pollinations",
        name: "Pollinations.AI",
        description: "FLUX.1 Schnell text-to-image engine",
        model: resolvePollinationsModel(),
        supportsEditing: false,
      },
      {
        id: "gemini",
        name: "Google Gemini",
        description: "High-resolution generative & conversational image editing",
        model: "gemini-3.1-flash-image",
        supportsEditing: true,
      },
      {
        id: "local",
        name: "Local Synthesizer",
        description: "Offline algorithmic vector & geometric synthesizer",
        model: "archai-local-vector-synth",
        supportsEditing: false,
      },
      {
        id: "huggingface",
        name: "Hugging Face",
        description: "Alternative inference provider",
        model: process.env.HF_IMAGE_MODEL || "black-forest-labs/FLUX.1-schnell",
        supportsEditing: false,
      },
    ],
  };
}

import { Capacitor } from '@capacitor/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

export class SpeechService {
  private static isSpeaking = false;

  static async speak(text: string, lang: string = 'en-US'): Promise<void> {
    if (this.isSpeaking) return;

    // Clean text: strip out parenthetical glosses like "(Conceptual History)"
    const cleanText = text.replace(/\([^)]*\)/g, '').trim();
    if (!cleanText) return;

    this.isSpeaking = true;

    try {
      // 1. First priority on Android / iOS: Native Device Text-to-Speech Engine
      if (Capacitor.isNativePlatform()) {
        await TextToSpeech.speak({
          text: cleanText,
          lang: lang,
          rate: 0.9,
          pitch: 1.0,
          volume: 1.0,
          category: 'ambient',
        });
        return;
      }

      // 2. Second priority in web browser: Web Speech API
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = lang;
        utterance.rate = 0.9;

        const voices = window.speechSynthesis.getVoices();
        const preferredVoice = voices.find(v => v.lang.startsWith('en'));
        if (preferredVoice) {
          utterance.voice = preferredVoice;
        }

        await new Promise<void>((resolve) => {
          utterance.onend = () => resolve();
          utterance.onerror = () => resolve();
          window.speechSynthesis.speak(utterance);
          // 3 second safety timeout
          setTimeout(resolve, 3000);
        });
        return;
      }

      // 3. Fallback to Audio element
      await this.playAudioFallback(cleanText);
    } catch (err) {
      console.warn('Speech synthesis fallback triggered:', err);
      await this.playAudioFallback(cleanText).catch(() => {});
    } finally {
      this.isSpeaking = false;
    }
  }

  private static playAudioFallback(text: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const encoded = encodeURIComponent(text);
      const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encoded}&tl=en`;
      const audio = new Audio(audioUrl);
      audio.onended = () => resolve();
      audio.onerror = (e) => reject(e);
      audio.play().catch(reject);
    });
  }
}

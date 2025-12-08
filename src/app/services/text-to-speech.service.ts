// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TextToSpeechService {

//   speak(text: string) {
//     if (!window.speechSynthesis) {
//       console.warn("Speech Synthesis not supported");
//       return;
//     }

//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = 'en-US';
//     utterance.pitch = 1;
//     utterance.rate = 1;
//     utterance.volume = 1;

//     window.speechSynthesis.cancel(); 
//     window.speechSynthesis.speak(utterance);
//   }
// }
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TextToSpeechService {

//   private voices: SpeechSynthesisVoice[] = [];

//   constructor() {
//     speechSynthesis.onvoiceschanged = () => {
//       this.voices = speechSynthesis.getVoices();
//     };
//   }

//   speak(text: string) {
//     if (!text) return;

//     const utterance = new SpeechSynthesisUtterance(text);
//     if (/[ء-ي]/.test(text)) {
//       utterance.lang = 'ar-SA';

//       const arabicVoice = this.voices.find(v => v.lang.startsWith('ar'));
//       if (arabicVoice) utterance.voice = arabicVoice;
//     } 
//     else {
//       utterance.lang = 'en-US';

//       const englishVoice = this.voices.find(v => v.lang === 'en-US');
//       if (englishVoice) utterance.voice = englishVoice;
//     }

//     utterance.rate = 1;
//     utterance.pitch = 1;

//     window.speechSynthesis.cancel();  
//     window.speechSynthesis.speak(utterance);
//   }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  private voices: SpeechSynthesisVoice[] = [];
  private voicesLoaded = false;

  constructor() {
    this.loadVoices();
  }

  private loadVoices() {
    speechSynthesis.onvoiceschanged = () => {
      this.voices = speechSynthesis.getVoices();
      this.voicesLoaded = true;
    };
    speechSynthesis.getVoices();
  }

  speak(text: string) {
    if (!text) return;
    if (!this.voicesLoaded) {
      setTimeout(() => this.speak(text), 200);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (/[ء-ي]/.test(text)) {
      utterance.lang = 'ar-SA';

      const arVoice =
        this.voices.find(v => v.lang.startsWith('ar')) ||
        this.voices.find(v => v.lang === 'ar-SA');

      if (arVoice) utterance.voice = arVoice;
      else console.warn("⚠ No Arabic voice found — install Arabic TTS in Chrome!");
    }
    else {
      utterance.lang = 'en-US';

      const enVoice = this.voices.find(v => v.lang === 'en-US');
      if (enVoice) utterance.voice = enVoice;
    }

    utterance.rate = 1;
    utterance.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }
}

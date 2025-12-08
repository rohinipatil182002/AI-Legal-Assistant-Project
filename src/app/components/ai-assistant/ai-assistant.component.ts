import { Component, NgZone } from '@angular/core';
import { LegalAIService } from 'src/app/services/legal-ai.service';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';

declare var webkitSpeechRecognition: any;

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.css']
})
export class AiAssistantComponent {
  userInput: string = '';
  isLoading: boolean = false;
  messages: any[] = [];

  recognition: any;
  isRecording: boolean = false;
  autoStopped: boolean = false;

  constructor(
    private legalAI: LegalAIService,
    private ngZone: NgZone,
    private textToSpeech: TextToSpeechService
  ) {
    this.setupSpeechRecognition();
  }

  setupSpeechRecognition() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.warn("Speech Recognition not supported.");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = "en-US";
    this.recognition.continuous = false;
    this.recognition.interimResults = false;

    let autoSendTimer: any;

    this.recognition.onstart = () => {
      this.ngZone.run(() => {
        this.isRecording = true;
      });
    };

    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;

      this.ngZone.run(() => {
        this.userInput = transcript;
      });
    };

    this.recognition.onspeechend = () => {
      this.recognition.stop();
    };

    this.recognition.onend = () => {
      this.ngZone.run(() => {
        this.isRecording = false;

        if (this.userInput.trim()) {
          autoSendTimer = setTimeout(() => {
            this.sendMessage();
          }, 4000);
        }
      });
    };

    this.recognition.onerror = () => {
      this.ngZone.run(() => {
        this.isRecording = false;
      });
    };
  }



  toggleMic() {
    if (!this.recognition) return;

    if (!this.isRecording) {
      this.recognition.start();
    } else {
      this.recognition.stop();
    }
  }

  scrollToBottom() {
    setTimeout(() => {
      const el = document.querySelector('.chat-messages');
      if (el) el.scrollTop = el.scrollHeight;
    }, 100);
  }

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ type: 'user', text: this.userInput });
    this.scrollToBottom();
    this.isLoading = true;

    this.legalAI.askQuestion(this.userInput).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        this.messages.push({
          type: 'bot',
          text: res.result || res.answer || 'No response from server'
        });
        this.textToSpeech.speak(res.result || res.answer || '');
        this.scrollToBottom();
        this.userInput = '';
      },
      error: () => {
        this.isLoading = false;
        const errorText = 'Error processing your request.';

        this.messages.push({
          type: 'bot',
          text: errorText
        });
        this.textToSpeech.speak(errorText);
        this.scrollToBottom();
        this.userInput = '';
      }
    });
  }

}

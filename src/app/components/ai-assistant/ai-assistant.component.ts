import { Component } from '@angular/core';
import { LegalAIService } from 'src/app/services/legal-ai.service';

@Component({
  selector: 'app-ai-assistant',
  templateUrl: './ai-assistant.component.html',
  styleUrls: ['./ai-assistant.component.css']
})
export class AiAssistantComponent {
  userInput: string = '';
  isLoading: boolean = false;

  messages: any[] = [];

  constructor(private legalAI: LegalAIService) { }
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
        this.scrollToBottom();
        this.userInput = '';
      },
      error: () => {
        this.isLoading = false;
        this.messages.push({
          type: 'bot',
          text: 'Error processing your request.'
        });
        this.scrollToBottom();
        this.userInput = '';
      }
    });
  }


}

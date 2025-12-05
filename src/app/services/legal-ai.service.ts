import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LegalAIService {

  private baseUrl = 'https://lyraai-dev-api.azurewebsites.net/iraq';

  constructor(private http: HttpClient) {}


 askQuestion(question: string): Observable<any> {
  return this.http.post(`${this.baseUrl}/ask`, { question: question });
}

}

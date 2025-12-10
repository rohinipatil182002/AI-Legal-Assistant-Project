import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-documents',
  templateUrl: './generate-documents.component.html',
  styleUrls: ['./generate-documents.component.css']
})
export class GenerateDocumentsComponent {
selectedTemplate: string | null = null;

selectTemplate(template: string) {
  this.selectedTemplate = template;
}

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-summarize',
  templateUrl: './summarize.component.html',
  styleUrls: ['./summarize.component.css']
})
export class SummarizeComponent {
onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log("Uploaded File:", file);
  }
}

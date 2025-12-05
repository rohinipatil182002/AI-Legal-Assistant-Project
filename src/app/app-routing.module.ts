import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { SummarizeComponent } from './components/summarize/summarize.component';
import { GenerateDocumentsComponent } from './components/generate-documents/generate-documents.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
   { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'ai-assistant', component: AiAssistantComponent},
  {path:'summarize', component:SummarizeComponent},
  {path:'generate-document', component:GenerateDocumentsComponent},
  {path:'regulations', component:RegulationsComponent},
  {path:'search', component:SearchComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

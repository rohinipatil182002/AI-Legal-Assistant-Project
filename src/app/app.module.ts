import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AiAssistantComponent } from './components/ai-assistant/ai-assistant.component';
import { FormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {  TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';
import { SummarizeComponent } from './components/summarize/summarize.component';
import { RegulationsComponent } from './components/regulations/regulations.component';
import { GenerateDocumentsComponent } from './components/generate-documents/generate-documents.component';
import { SearchComponent } from './components/search/search.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader();
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    AiAssistantComponent,
    SummarizeComponent,
    RegulationsComponent,
    GenerateDocumentsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule ,
      TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [TRANSLATE_HTTP_LOADER_CONFIG]
      }
    })
  ],
  providers: [
     {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: { 
        prefix: './assets/i18n/', 
        suffix: '.json' 
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CharacterFormComponent } from './character-form/character-form.component';
import { CharacterSummaryComponent } from './character-summary/character-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CharacterFormComponent,
    CharacterSummaryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http/'

import { AppComponent } from './app.component';
import { ColorDirective } from './directives/color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { CardCssComponent } from './components/card-css/card-css.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    CardComponent,
    HeaderComponent,
    CardCssComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

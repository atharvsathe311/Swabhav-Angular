import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieInputComponent } from './movie-input/movie-input.component';
import { MovieListDisplayComponent } from './movie-list-display/movie-list-display.component';
import { MovieDetailsDisplayComponent } from './movie-details-display/movie-details-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MovieInputComponent,
    MovieListDisplayComponent,
    MovieDetailsDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

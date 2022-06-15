import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokedexModule } from '@modules/pokedex.module';

@NgModule({
  imports: [BrowserModule, PokedexModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

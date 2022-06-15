import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PokedexComponent } from '../components/pokedex/pokedex.component';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import { PokedexService } from '../services/pokedex.service';

@NgModule({
  declarations: [PokedexComponent, PokemonCardComponent],
  imports: [CommonModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  exports: [PokedexComponent],
  providers: [PokedexService],
})
export class PokedexModule {}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';

import { IPokemon } from '../../interfaces/IPokemon';
import { PokedexService } from '../../services/pokedex.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  pokemon: IPokemon;
  error: string;
  search: FormControl;

  constructor(
    private pokedexService: PokedexService,
    private formBuilder: FormBuilder
  ) {
    this.search = this.formBuilder.control(
      { value: '', disabled: false },
      Validators.compose([
        Validators.required,
      ])
    );
  }

  ngOnInit() {}

  searchPokemon(): void {
    this.pokedexService
      .getPokemon(this.search.value)
      .pipe(
        map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          abilities: pokemon.abilities,
          sprites: pokemon.sprites,
          moves: pokemon.moves,
          types: pokemon.types,
        }))
      )
      .subscribe((pokemon) => {
        this.pokemon = pokemon;
        this.error = null;
      },
      (error: HttpErrorResponse) => {
        this.pokemon = null;
        this.error = error.message;
      });
  }
}

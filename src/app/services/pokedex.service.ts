import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPokemon } from '@interfaces/IPokemon';

@Injectable()
export class PokedexService {
  constructor(private http: HttpClient) {}

  getPokemon(query: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${query}`
    );
  }
}

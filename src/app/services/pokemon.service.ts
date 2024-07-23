import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPokemons } from '../Pokemon.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url: string = 'https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon.json'

  constructor(private http: HttpClient) { }

  obtenerPokemons(): Observable<IPokemons[]> {
    return this.http.get<IPokemons[]>(this.url);
  }
}

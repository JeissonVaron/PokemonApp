import { Component, OnInit } from '@angular/core';
import { PokemonService } from './services/pokemon.service';
import { IPokemons } from './Pokemon.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'Pokemon App';
  baseImg: string = 'https://raw.githubusercontent.com/jherr/fower-pokemon-vue/master/public/pokemon/'
  pokemons: IPokemons[] = [];

  constructor(private pokemonServices: PokemonService) {

  }

  ngOnInit(): void {
    this.consultarPokemons()
  }

  consultarPokemons(): void {
    this.pokemonServices.obtenerPokemons()
    .subscribe(
      (respuesta: IPokemons[] ) => this.pokemons = respuesta,
      error => {
        console.log(error)
      }
    )
  }

  obtenerSrcImagen(pokemon: IPokemons): string {
    return this.baseImg + pokemon.name.english.toLowerCase() + '.jpg'
  }
}

import { Component, OnInit } from '@angular/core';
// import Pokedex from 'pokedex-promise-v2';
import { PokemonClient } from 'pokenode-ts';
import { MetroItem } from '../../commons/models/metro-item.model';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.css'],
})
export class PkmnListComponent implements OnInit {
  constructor() {}

  pkmns: MetroItem[] = [];

  menusTeste = [
    new MetroItem("pokemon"),
    new MetroItem("types"),
    new MetroItem("moves"),
  ]

  ngOnInit() {
    const interval = {
      limit: 10,
      offset: 0,
    };
    (async () => {
      const api = new PokemonClient();

      await api
        .listPokemons()
        .then((data) => {
          data.results.forEach((item) => {
            this.pkmns.push(new MetroItem(item.name, '', item.url.replace(/.+(v2)/g, '')));
          });
        })
        .catch((error) => console.log(error));
    })();
    // this.pkdx.getPokemonsList(interval).then((response) => {
    //   response.results.forEach((item) => {
    //     this.pkmns.push(
    //       new MetroItem(item.name, '', item.url.replace(/.+(v2)/g, ''))
    //     );
    //   });
    // });
  }
}

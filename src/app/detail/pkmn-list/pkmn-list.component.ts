import { Component, OnInit } from '@angular/core';
import Pokedex from 'pokedex-promise-v2';
import { MetroItem } from '../../commons/models/metro-item.model';

@Component({
  selector: 'app-pkmn-list',
  templateUrl: './pkmn-list.component.html',
  styleUrls: ['./pkmn-list.component.css'],
})
export class PkmnListComponent implements OnInit {
  constructor() {}

  pkdx: Pokedex = new Pokedex();
  pkmns: MetroItem[] = [];

  ngOnInit() {
    const interval = {
      limit: 10,
      offset: 0,
    };
    this.pkdx.getPokemonsList(interval).then((response) => {
      response.results.forEach((item) => {
        this.pkmns.push(
          new MetroItem(item.name, '', item.url.replace(/.+(v2)/g, ''))
        );
      });
    });
  }
}

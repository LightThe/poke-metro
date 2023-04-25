import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import Pokedex from 'pokedex-promise-v2';
// import Pokemon  from 'pokedex-promise-v2';
import { MetroItem } from '../../commons/models/metro-item.model';
import { PokemonClient, Pokemon } from 'pokenode-ts';
import { asyncScheduler } from 'rxjs';

@Component({
  selector: 'app-pkmn-info-panel',
  templateUrl: './pkmn-info-panel.component.html',
  styleUrls: ['./pkmn-info-panel.component.css'],
})
export class PkmnInfoPanelComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: string = '';
  types: string = '';
  flavorText = '';
  spriteLocation = '';
  isLoaded: boolean = false;
  pkmn: Pokemon
  infos: MetroItem[] = [];
  details: MetroItem[] = [
    new MetroItem('moves'),
    new MetroItem('games'),
    new MetroItem('stats'),
  ];

  ngOnInit() {
    this.id = (this.route.snapshot.paramMap.get('id'))!;
    (async () => {
      const api = new PokemonClient();

      await api
        .getPokemonById(Number(this.id))
        .then((data) => {
          this.pkmn = data;
          this.fillPkmnInfo();
      })
      this.isLoaded = true;
    })();
  }

  fillPkmnInfo(): void{
    (async () => {
      const pkcli = new PokemonClient();

      await pkcli.getPokemonSpeciesById(Number(this.id))
      .then((data)=>{
        const ftFilter = data.flavor_text_entries.filter((item) => {
          return item.language.name === 'en';
        });
        this.flavorText = ftFilter[0].flavor_text;
      })

    })();
    this.pkmn.types.forEach((type) => {
      this.types = this.types == '' ? type.type.name : this.types + '+' + type.type.name
    });
    this.infos = [
      new MetroItem('types', this.types),
      new MetroItem('height', this.pkmn.height / 10 + 'm'),
      new MetroItem('weight', this.pkmn.weight / 10 + 'kg'),
      new MetroItem('base experience yield', this.pkmn.base_experience + ''),
    ];
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Pokedex from 'pokedex-promise-v2';
import Pokemon  from 'pokedex-promise-v2';
import { MetroItem } from '../../commons/models/metro-item.model';

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
  pkdx: Pokedex = new Pokedex();
  pkmn: Pokedex.Pokemon;
  infos: MetroItem[] = [];
  details: MetroItem[] = [
    new MetroItem('moves'),
    new MetroItem('games'),
    new MetroItem('stats'),
  ];

  ngOnInit() {
    this.id = (this.route.snapshot.paramMap.get('id'))!;
    this.pkdx.getPokemonByName(Number(this.id)).then((res: any) => {
      this.pkmn = res as Pokedex.Pokemon;

      this.pkmn.types.forEach((type: Pokedex.PokemonType) => {
        this.types =
          this.types == '' ? type.type.name : this.types + '+' + type.type.name;
      });

      this.pkdx.getPokemonSpeciesByName(this.id).then((res: any) => {
        const response = res as Pokedex.PokemonSpecies;
        const flavor_filter = response.flavor_text_entries.filter((item: Pokedex.PokemonSpeciesFlavorTextEntry) => {
          return item.language.name === 'en' && item.version.name === 'sword';
        });
        this.flavorText = flavor_filter[0].flavor_text;
      });

      this.infos = [
        new MetroItem('types', this.types),
        new MetroItem('height', this.pkmn.height / 10 + 'm'),
        new MetroItem('weight', this.pkmn.weight / 10 + 'kg'),
        new MetroItem('base experience yield', this.pkmn.base_experience + ''),
      ];
      this.isLoaded = true;
    });
  }
}

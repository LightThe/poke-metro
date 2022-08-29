import { Component, OnInit } from '@angular/core';
import { MetroItem } from '../../commons/models/metro-item.model';

@Component({
  selector: 'app-pkdx-home',
  templateUrl: './pkdx-home.component.html',
  styleUrls: ['./pkdx-home.component.css'],
})
export class PkdxHomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  pokeMenu = [
    new MetroItem('starters', '', '/pokemon'),
    new MetroItem('by region'),
    new MetroItem('by generation'),
    new MetroItem('by type'),
    new MetroItem('search name'),
  ];

  mechMenu = [
    new MetroItem('moves'),
    new MetroItem('types'),
    new MetroItem('abilities'),
    new MetroItem('nature'),
  ];

  gamesMenu = [
    new MetroItem('main games'),
    new MetroItem('spin offs'),
  ]


}

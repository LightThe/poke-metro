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

  mainMenu = [
    new MetroItem('pokemon', '', '/pokemon'),
    new MetroItem('items'),
    new MetroItem('games'),
    new MetroItem('types'),
    new MetroItem('abilities'),
    // new MetroItem('funciona cachorra'),
  ];
}

import { Component, OnInit, Input } from '@angular/core';
import { MetroItem } from '../models/metro-item.model';

@Component({
  selector: 'app-mtro-pivot',
  templateUrl: './mtro-pivot.component.html',
  styleUrls: ['./mtro-pivot.component.css']
})
export class MtroPivotComponent implements OnInit {

  constructor() { }

  @Input() title: string = '';
  @Input() menus: MetroItem[] = [];

  ngOnInit() {
    console.log(this.menus);
  }

}
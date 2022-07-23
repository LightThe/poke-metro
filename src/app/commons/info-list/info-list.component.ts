import { Component, Directive, Input, OnInit } from '@angular/core';
import { MetroItem } from '../models/metro-item.model';

@Component({
  selector: 'app-info-list',
  templateUrl: './info-list.component.html',
  styleUrls: ['./info-list.component.css']
})
export class InfoListComponent implements OnInit {

  @Input() items: MetroItem[] = [];

  constructor() { }

  ngOnInit() {
  }

}
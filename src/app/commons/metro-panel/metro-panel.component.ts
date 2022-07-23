import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metro-panel',
  templateUrl: './metro-panel.component.html',
  styleUrls: ['./metro-panel.component.css']
})
export class MetroPanelComponent implements OnInit {

  @Input() title: string = '';

  constructor() { }

  ngOnInit() {
  }

}
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetroItem } from '../models/metro-item.model';

@Component({
  selector: 'app-mtro-list',
  templateUrl: './mtro-list.component.html',
  styleUrls: ['./mtro-list.component.css'],
})
export class MtroListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  @Input() items: MetroItem[] = [];

  navigate(to:string):void{
    console.log(to);
    this.router.navigateByUrl(to);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetroItem } from './commons/models/metro-item.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  menusTeste = [
    new MetroItem("menu1"),
    new MetroItem("menu2"),
    new MetroItem("menu3"),
    new MetroItem("menu4")
  ]

  goback(): void {
    window.history.go(-1);
  }
  gohome(): void {
    this.router.navigateByUrl('/');
  }
}

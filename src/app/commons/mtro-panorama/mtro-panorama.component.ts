import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-mtro-panorama',
  templateUrl: './mtro-panorama.component.html',
  styleUrls: ['./mtro-panorama.component.css']
})
export class MtroPanoramaComponent {

  constructor() { }

  @Input() title: string = '';
}
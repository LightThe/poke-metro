import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetroPanelComponent } from './metro-panel/metro-panel.component';
import { InfoListComponent } from './info-list/info-list.component';
import { MtroPanoramaComponent } from './mtro-panorama/mtro-panorama.component';
import { MtroListComponent } from './mtro-list/mtro-list.component';
import { MtroPivotComponent } from './mtro-pivot/mtro-pivot.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    MetroPanelComponent,
    InfoListComponent,
    MtroPanoramaComponent,
    MtroListComponent,
    MtroPivotComponent,
  ],
  exports: [
    MetroPanelComponent,
    InfoListComponent,
    MtroPanoramaComponent,
    MtroListComponent,
    MtroPivotComponent,
  ],
})
export class CommonsModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmnInfoPanelComponent } from './pkmn-info-panel/pkmn-info-panel.component';
import { PkdxHomeComponent } from './pkdx-home/pkdx-home.component';
import { CommonsModule } from '../commons/commons.module';
import { PkmnListComponent } from './pkmn-list/pkmn-list.component';

@NgModule({
  imports: [CommonModule, CommonsModule],
  declarations: [PkmnInfoPanelComponent, PkdxHomeComponent, PkmnListComponent],
  exports: [PkmnInfoPanelComponent, PkdxHomeComponent, PkmnListComponent],
})
export class DetailModule {}

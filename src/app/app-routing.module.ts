import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PkmnInfoPanelComponent } from './detail/pkmn-info-panel/pkmn-info-panel.component';
import { PkmnListComponent } from './detail/pkmn-list/pkmn-list.component';
import { PkdxHomeComponent } from './detail/pkdx-home/pkdx-home.component';

const routes: Routes = [
  { path: 'pokemon', component: PkmnListComponent },
  { path: 'pokemon/:id/', component: PkmnInfoPanelComponent },
  { path: 'home', component: PkdxHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

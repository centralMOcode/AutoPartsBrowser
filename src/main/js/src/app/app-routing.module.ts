import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartsComponent } from './parts/parts.component';
import { PartStartComponent } from './parts/part-start/part-start.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PartItemComponent } from './parts/part-list/part-item/part-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/models', pathMatch: 'full' },
  { path: 'models', component: SidebarComponent, children: [
      { path: "", component: PartStartComponent },
      { path: ":id", component: PartItemComponent }
  ] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PartsComponent } from './parts/parts.component';
import { PartStartComponent } from './parts/part-start/part-start.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PartItemComponent } from './parts/part-list/part-item/part-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { PartCreateComponent } from './parts/part-create/part-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/models', pathMatch: 'full' },
  { path: 'models', component: SidebarComponent, children: [
      { path: "", component: PartStartComponent },
      { path: ":id", component: PartItemComponent },
      { path: ":id/create", component: PartCreateComponent }
  ] },
  { path: 'cart', component: CartListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

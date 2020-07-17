import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PartListComponent } from './parts/part-list/part-list.component';
import { PartItemComponent } from './parts/part-list/part-item/part-item.component';
import { PartsComponent } from './parts/parts.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarListComponent } from './sidebar/sidebar-list/sidebar-list.component';
import { SidebarItemComponent } from './sidebar/sidebar-item/sidebar-item.component';
import { PartStartComponent } from './parts/part-start/part-start.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PartListComponent,
    PartItemComponent,
    PartsComponent,
    HeaderComponent,
    SidebarComponent,
    SidebarListComponent,
    SidebarItemComponent,
    PartStartComponent,
    DropdownDirective,
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

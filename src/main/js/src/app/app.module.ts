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
    PartStartComponent
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

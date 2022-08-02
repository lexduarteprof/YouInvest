import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FundosListComponent } from './fundos/fundos-list/fundos-list.component';
import { FundoItemComponent } from './fundos/fundo-item/fundo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FundosListComponent,
    FundoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

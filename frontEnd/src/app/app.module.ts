import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { CartComponent } from './cart/cart.component';
import { DescripcionHijoComponent } from './descripcion-hijo/descripcion-hijo.component';
import { DescripcionPadreComponent } from './descripcion-padre/descripcion-padre.component';
import { HomeComponent } from './home/home.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    CartComponent,
    DescripcionHijoComponent,
    DescripcionPadreComponent,
    HomeComponent,
    PadreComponent,
    HijoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

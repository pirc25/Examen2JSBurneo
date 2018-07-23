import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './Componentes/buscador/buscador.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { TiendaComponent } from './Componentes/tienda/tienda.component';
import {TiendaService} from "./Servicios/tienda.service";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHeaders ,} from "@angular/common/http";
import { ProductoComponent } from './Componentes/producto/producto.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.routes";
import {FindService} from "./Servicios/find.service";
import { DescripcionTiendaComponent } from './Componentes/descripcionTienda/descripcionTienda.component';
import { HomeComponent } from './Componentes/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import { DescripcionProductoComponent } from './Componentes/descripcionProducto/descripcionProducto.component';
import { CartComponent } from './Componentes/cart/cart.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MensajeComponent } from './Componentes/mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    TiendaComponent,
    ProductoComponent,
    DescripcionTiendaComponent,
    HomeComponent,
    DescripcionProductoComponent,
    CartComponent,
    MensajeComponent,

  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    ),
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [
    TiendaService,FindService


  ],
  entryComponents:[
    MensajeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

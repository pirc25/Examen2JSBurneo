import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {DescripcionTiendaComponent} from "./Componentes/descripcionTienda/descripcionTienda.component";
import {TiendaComponent} from "./Componentes/tienda/tienda.component";
import {ProductoComponent} from "./Componentes/producto/producto.component";
import {HomeComponent} from "./Componentes/home/home.component";
import {DescripcionProductoComponent} from "./Componentes/descripcionProducto/descripcionProducto.component";
import {CartComponent} from "./Componentes/cart/cart.component";

export const RUTAS_APP: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'tienda/:id',
    component: DescripcionTiendaComponent,
    children:[
      {path:'producto/:id',component:DescripcionProductoComponent}

    ]
  },
  {
    path:'producto/:id',
    component:DescripcionProductoComponent
  },
  {
    path:'carrito',
    component:CartComponent
  }



];

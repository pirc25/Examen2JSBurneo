import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {DescripcionPadreComponent} from "./Componentes/descripcion-padre/descripcion-padre.component";
import {PadreComponent} from "./Componentes/padre/padre.component";
import {HijoComponent} from "./Componentes/hijo/hijo.component";
import {HomeComponent} from "./Componentes/home/home.component";
import {DescripcionHijoComponent} from "./Componentes/descripcion-hijo/descripcion-hijo.component";
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
    path:'padre/:id',
    component: DescripcionPadreComponent,
    children:[
      {path:'hijo/:id',component:DescripcionHijoComponent}

    ]
  },
  {
    path:'hijo/:id',
    component:DescripcionHijoComponent
  },
  {
    path:'carrito',
    component:CartComponent
  }



];

import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ModuleWithProviders} from "@angular/core";
import {ProductoComponent} from "./producto/producto.component";
import {TiendaComponent} from "./tienda/tienda.component";
import {CarritoComponent} from "./carrito/carrito.component";

export const routes:Routes=[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'producto/:idproducto',component:ProductoComponent},
  {path:'producto/:idproducto/:tienda/:idtienda',component:TiendaComponent},
  {path:'carrito',component:CarritoComponent},

];
export const routing:ModuleWithProviders=RouterModule.forRoot(routes);

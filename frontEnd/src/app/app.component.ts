import {Component, OnInit} from '@angular/core';
import {Usuario} from "./Clases/usuario";
import {TiendaService} from "./Servicios/tienda.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';
  contadorCart=0
  usuario:Usuario[]
  constructor(private _padreService: TiendaService,){

  }

  ngOnInit() {
    // this._padreService.getPadres()
    //   .subscribe(
    //     res => this.padres = res,
    //     err => console.log(err)
    //   )

    this.getUsuario()
    this.contadorCart=this._padreService._contadorCart
    this.escucharCambiosContadorCart()

  }

  getUsuario(){
    this._padreService.getUsuario()
      .subscribe(usuario => this.usuario = usuario);

  }
  escucharCambiosContadorCart() {
    this._padreService
      .cambioContadorCart
      .subscribe(
        (contadorCart: number) => {
          this.contadorCart = contadorCart;
        }
      )
  }
}

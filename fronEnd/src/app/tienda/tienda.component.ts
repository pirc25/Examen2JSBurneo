import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  productos;
  tienda;
  _parametros:any;

  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.cargarTienda();
    this.cargarProductos();
  }

  cargarProductos(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/jugador?tiendaIDFK='+this._parametros.idtienda)
        .subscribe(
          (res)=>{
            this.productos=res;
            console.log(this.productos);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

  cargarTienda(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/tienda?id='+this._parametros.idtienda)
        .subscribe(
          (res)=>{
            this.tienda=res;
            console.log(this.productos);
          },
          (err)=>{
            console.log(err);
          }
        )
    });
  }

}

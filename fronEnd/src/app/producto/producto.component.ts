import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ComprasService} from "../service/compras.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto=[];
  _parametros:any;

  nombre:string;
  estado: boolean;

  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute, private _compras: ComprasService) {

  }

  ngOnInit() {
    this.cargarProducto();

  }

  cargarProducto(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/producto?id='+this._parametros.idproducto)
        .subscribe(
          (res:any[])=>{
            this.producto=res;
            console.log(this.producto);
            console.log(this.producto[0].nombre);
            this.estado=this._compras.buscarproductoes(this.producto[0].id,this.producto[0].tienda.id);
            console.log(this.estado);
            console.log(this._compras.getproductoes());
          },
          (err)=>{
            console.log(err);
          }
        )


    });
  }

  comprarProducto(){
    this._compras.ingresarProductos(this.producto);
    this._compras.actualizarTamanio();
    console.log(this._compras)
  }



}

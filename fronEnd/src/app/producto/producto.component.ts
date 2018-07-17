import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {ComprasService} from "../servicios/compras.service";

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  jugador=[];
  _parametros:any;

  nombre:string;
  estado: boolean;

  constructor(private _httpClient: HttpClient, private _activetedRoute:ActivatedRoute, private _compras: ComprasService) {

  }

  ngOnInit() {
    this.cargarJugador();

  }

  cargarJugador(){
    this._activetedRoute.params.subscribe(parametros=>{
      this._parametros=parametros;
      this._httpClient.get('http://localhost:1337/jugador?id='+this._parametros.idjugador)
        .subscribe(
          (res:any[])=>{
            this.jugador=res;
            console.log(this.jugador);
            console.log(this.jugador[0].nombre);
            this.estado=this._compras.buscarJugadores(this.jugador[0].id,this.jugador[0].equipoIDFK.id);
            console.log(this.estado);
            console.log(this._compras.getJugadores());
          },
          (err)=>{
            console.log(err);
          }
        )


    });
  }

  comprarJugador(){
    this._compras.ingresarJugadores(this.jugador);
    this._compras.actualizarTamanio();
    console.log(this._compras)
  }



}

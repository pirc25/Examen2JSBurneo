import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private _carrito=[];
  private _indice=0;
  private _estado:boolean;

  tamanio$ = new BehaviorSubject(this._carrito.length);

  constructor() {}

  public getproducto(){
    return this._carrito;
  }

  public ingresarproducto(producto){
    this._carrito.push(
      {
        'id': producto[0].id,
        'nombre': producto[0].nombre,
        'codigo': producto[0].codigo,
        'valor': producto[0].valor,
        'urlImag' : producto[0].urlImag,
        'tienda': producto[0].tienda.id
      }
    );
  }

  public borrarproductoes(indice){
    this._carrito.splice(indice,1);
  }

  public buscarproductoes(id:number, equipoIDFK:number){

    if(this._carrito.length==0){
      this._estado=false;
    }else{
      console.log('tam',this._carrito.length)

      for (var i = 0; i < this._carrito.length; i++) {
        console.log('carrito',this._carrito[i])
        if(this._carrito[i].id==id && this._carrito[i].equipoIDFK==equipoIDFK){
          this._estado=true;
          break;
        }else{
          this._estado=false;
        }
      }

    }
    return this._estado;
  }

  public getLength() {
    return this.tamanio$;
  }

  public actualizarTamanio(){
    this.tamanio$.next(this._carrito.length);
  }

}

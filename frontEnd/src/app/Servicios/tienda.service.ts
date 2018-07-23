import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Tienda} from "../Clases/tienda";
import { Observable, of } from 'rxjs';
import {catchError,map,tap} from "rxjs/operators";
import {Producto} from "../Clases/producto";
import {Usuario} from "../Clases/usuario";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable(
   {providedIn: 'root'}
  )
export class TiendaService {
  private _padresUrl = "http://localhost:1337/api";
  private _hijoUrl = "http://localhost:1337/aplicaciones";
  private _usuarioUrl="http://localhost:1337/usuario"
  private _hijoCart="http://localhost:1337/aplicaciones?cart=true"
   _contadorCart:number
  cambioContadorCart: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) {

  }
  emitirCambioContadorCart(contador:number) {
    this._contadorCart =contador ;
    this.cambioContadorCart.emit(contador);
  }

  getPadres():Observable<Tienda[]> {
    return this.http.get<Tienda[]>(this._padresUrl)
      // .pipe(
      //   tap(heroes => this.log('fetched heroes')),
      //   catchError(this.handleError('getPadres', []))
      // );
    //return of(PADRES)
  }

  getPadre(id: number): Observable<Tienda> {
    // TODO: send the message _after_ fetching the hero
    const url = `${this._padresUrl}/${id}`;
    console.log(url)
    return this.http.get<Tienda>(url)

    //return of(PADRES.find(tienda => tienda._id === id));
  }



   getHijos():Observable<Producto[]>{
     return this.http.get<Producto[]>(this._hijoUrl)
   }

   getUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this._usuarioUrl)
   }
   getHijo(id:number):Observable<Producto>{
    const url=`${this._hijoUrl}/${id}`
     return this.http.get<Producto>(url)
   }
  updateHijo (id:number,hijo: Producto): Observable<any> {
    const url = `${this._hijoUrl}/${id}`
    let bodyObj = {

      id: id,
      cart: true
    };
    return this.http.put(url, JSON.stringify(bodyObj), httpOptions)
      // .pipe(
      // tap(_ => this.log(`updated hero id=${hero.id}`)),
      // catchError(this.handleError<any>('updateHero'))
      // );
  }
  getHijosCart():Observable<Producto[]>{
    return this.http.get<Producto[]>(this._hijoCart)
  }
  eliminarHijosCart (id:number): Observable<any> {
    const url = `${this._hijoUrl}/${id}`
    let bodyObj = {

      id: id,
      cart: false
    };
    return this.http.put(url, JSON.stringify(bodyObj), httpOptions)
    // .pipe(
    // tap(_ => this.log(`updated hero id=${hero.id}`)),
    // catchError(this.handleError<any>('updateHero'))
    // );
  }

}

import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Padre} from "../Clases/padre";
import { Observable, of } from 'rxjs';
import {catchError,map,tap} from "rxjs/operators";
import {Hijo} from "../Clases/hijo";
import {Usuario} from "../Clases/usuario";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable(
   {providedIn: 'root'}
  )
export class PadreService {
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

  getPadres():Observable<Padre[]> {
    return this.http.get<Padre[]>(this._padresUrl)
      // .pipe(
      //   tap(heroes => this.log('fetched heroes')),
      //   catchError(this.handleError('getPadres', []))
      // );
    //return of(PADRES)
  }

  getPadre(id: number): Observable<Padre> {
    // TODO: send the message _after_ fetching the hero
    const url = `${this._padresUrl}/${id}`;
    console.log(url)
    return this.http.get<Padre>(url)

    //return of(PADRES.find(padre => padre._id === id));
  }



   getHijos():Observable<Hijo[]>{
     return this.http.get<Hijo[]>(this._hijoUrl)
   }

   getUsuario():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this._usuarioUrl)
   }
   getHijo(id:number):Observable<Hijo>{
    const url=`${this._hijoUrl}/${id}`
     return this.http.get<Hijo>(url)
   }
  updateHijo (id:number,hijo: Hijo): Observable<any> {
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
  getHijosCart():Observable<Hijo[]>{
    return this.http.get<Hijo[]>(this._hijoCart)
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

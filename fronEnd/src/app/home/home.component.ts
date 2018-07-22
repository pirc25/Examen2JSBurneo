import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickEnBuscar: EventEmitter<object> = new EventEmitter();
  tiendas;
  productos;
  searchText:string;
  arrayNombrestiendas=[];
  arrayNombresproductos=[];

  j:string;



  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

    const observableProducto$ = this._httpClient
      .get('http://localhost:1337/producto');

    observableProducto$
      .subscribe(
        results=>{
          console.log(results);
          //this.arraytiendas=JSON.parse(JSON.stringify(results));
          this.productos=results;
          this.llenarproductos();

        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );

    const observableTienda$ = this._httpClient
      .get('http://localhost:1337/Tienda');

    observableTienda$
      .subscribe(
        results=>{
          console.log(results);
          this.tiendas=results;
          this.llenartiendas()

        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );
    //this.llenar()

  }

  llenartiendas(){
    for (var i = 0; i < this.tiendas.length; i++) {
      this.arrayNombrestiendas.push(this.tiendas[i].nombre);
    }
  }

  llenarproductos(){
    for (var i = 0; i < this.productos.length; i++) {
      this.arrayNombresproductos.push(this.productos[i].nombre);
    }
  }







}

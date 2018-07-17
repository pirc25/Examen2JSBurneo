import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clickEnBuscar: EventEmitter<object> = new EventEmitter();
  equipos;
  jugadores;
  searchText:string;
  arrayNombresEquipos=[];
  arrayNombresJugadores=[];

  j:string;



  constructor(private _httpClient: HttpClient) { }

  ngOnInit() {

    const observableEquipo$ = this._httpClient
      .get('http://localhost:1337/equipo');

    observableEquipo$
      .subscribe(
        results=>{
          console.log(results);
          //this.arrayEquipos=JSON.parse(JSON.stringify(results));
          this.equipos=results;
          this.llenarEquipos();

        },
        (error)=>{
          console.log('Error',error);
        },
        ()=>{
          console.log('COMPLETO!')
        }
      );

    const observableJugador$ = this._httpClient
      .get('http://localhost:1337/jugador');

    observableJugador$
      .subscribe(
        results=>{
          console.log(results);
          this.jugadores=results;
          this.llenarJugadores()

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

  llenarEquipos(){
    for (var i = 0; i < this.equipos.length; i++) {
      this.arrayNombresEquipos.push(this.equipos[i].nombre);
    }
  }

  llenarJugadores(){
    for (var i = 0; i < this.jugadores.length; i++) {
      this.arrayNombresJugadores.push(this.jugadores[i].nombre);
    }
  }







}

import {Component, Input, OnInit} from '@angular/core';
import {TiendaService} from "../../Servicios/tienda.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { Location } from '@angular/common';
import {Tienda} from "../../Clases/tienda";
import {Producto} from "../../Clases/producto";

@Component({
  selector: 'app-descripcionTienda',
  templateUrl: './descripcionTienda.component.html',
  styleUrls: ['./descripcionTienda.component.css']
})
export class DescripcionTiendaComponent implements OnInit {


  @Input() padre:Tienda
  selectedHijo:Producto


  constructor(private _service:TiendaService,
              private route:ActivatedRoute,
              private _router:Router,
              private _location: Location) {
  }

  ngOnInit() {

    this.getPadre()
  }


  getPadre(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.getPadre(id)
      .subscribe(padre => this.padre = padre);
  }

  goBack(): void {
    this._location.back();
  }

  mostrarDetalleHijo(hijo:Producto):void{

    this._router.navigate(['/producto',hijo.id]);
    this.selectedHijo=hijo

  }


}



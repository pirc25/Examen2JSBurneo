import {Component, Input, OnInit} from '@angular/core';
import {TiendaService} from "../../Servicios/tienda.service";
import {Producto} from "../../Clases/producto";
import {ActivatedRoute, Router} from "@angular/router";
import {Tienda} from "../../Clases/tienda";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {

  hijos:Producto[]
  selectedHijo:Producto
  constructor(private _service: TiendaService,
              private route:ActivatedRoute,
              private _router:Router) { }

  ngOnInit() {


      this.getHijos()




  }

  getHijos():void{
    this._service.getHijos()
      .subscribe(hijos => this.hijos = hijos);
    console.log(this.hijos)
  }

  mostrarDetalleHijo(hijo:Producto):void{

    this._router.navigate(['/producto',hijo.id]);
    this.selectedHijo=hijo

  }

}

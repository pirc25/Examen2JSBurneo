import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {TiendaService} from "../../Servicios/tienda.service";
import {Producto} from "../../Clases/producto";

@Component({
  selector: 'app-descripcionProducto',
  templateUrl: './descripcionProducto.component.html',
  styleUrls: ['./descripcionProducto.component.css']
})
export class DescripcionProductoComponent implements OnInit {

  @Input() producto:Producto
  contador:number=0
  constructor(private _service:TiendaService,
              private route:ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {
    this.getHijo()
  }

  getHijo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.getHijo(id)
      .subscribe(hijo => this.producto = hijo);
  }
  goBack(): void {
    this._location.back();
  }
  comprar():void{
    this.contador=this.contador+1
    this._service.emitirCambioContadorCart(this.contador)
    // this._location.back();
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.updateHijo(id,this.producto)
      .subscribe(() => this.goBack());
  }
}

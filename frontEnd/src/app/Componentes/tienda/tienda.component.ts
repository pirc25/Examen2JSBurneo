import { Component, OnInit } from '@angular/core';
import {TiendaService} from "../../Servicios/tienda.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Tienda} from "../../Clases/tienda";

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

 //padres = []
  padres:Tienda[];
  selectedPadre: Tienda;
  constructor(private _padreService: TiendaService,
              private _router:Router,
              private _route:ActivatedRoute) { }

  ngOnInit() {

    this.getPadres()

  }
  mostrarDetallePadre(padre:Tienda):void{

    this._router.navigate(['/tienda',padre.id]);
    this.selectedPadre=padre

  }
  getPadres(): void {
    this._padreService.getPadres()
      .subscribe(padres => this.padres = padres);
  }

}

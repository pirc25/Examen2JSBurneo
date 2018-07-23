import { Component, OnInit } from '@angular/core';
import {FindService} from "../../Servicios/find.service";
import {Observable} from "rxjs";
import {catchError, debounceTime, distinctUntilChanged, switchMap, tap,map} from "rxjs/operators";
import {of} from "rxjs/internal/observable/of";
import {TiendaService} from "../../Servicios/tienda.service";



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;

  constructor(private _service: FindService) { }

//padres = []

  ngOnInit() {
    // this._service.getPadres()
    //   .subscribe(
    //     res => this.padres = res,
    //     err => console.log(err)
    //   )
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._service.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    );
}

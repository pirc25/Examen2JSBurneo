import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuario=[];

  constructor() {
    this._usuario = [
      {
        id:1,
        nombre: 'Richard',
        apellido: 'Burneo',
        correoElectronico: 'richard.burneo@gmail.com',
       }];
  }

  public getUsuario(){
    return this._usuario;
  }
}

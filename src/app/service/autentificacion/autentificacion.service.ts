import { Injectable } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  private usuarioAutenticado: boolean = false;

  constructor(private _servicioUsuario: UsuariosService) { }

  autentificacion(username: string, password: string): boolean {
    const usuarios = this._servicioUsuario.obtener_lista_usuarios();
    const usuarioExiste = usuarios.some(usuario => usuario.correo == username && usuario.password == password);
    if (usuarioExiste) {
      this.usuarioAutenticado = true;
      return true;
    } else {
      return false;
    }
  }

  cerrarSesion(): void {
    this.usuarioAutenticado = false;
  }

  estaAutenticado(): boolean {
    return this.usuarioAutenticado;
  }
}

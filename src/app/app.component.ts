import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from './service/autentificacion/autentificacion.service';
import { UsuariosService } from './service/usuarios/usuarios.service';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(
    private _authService: AutentificacionService,
    private router: Router,
    private _usuarioService: UsuariosService
  ) {}

  ngOnInit() {

  }

  estaAutenticado(): boolean {
    return this._authService.estaAutenticado();
  }

  irHome() {
    this.router.navigate(['/home']);
  }

  irLogin() {
    this.router.navigate(['/login']);
  }

  irPerfil() {
    this.router.navigate(['/dashboard']);
  }

  irRegistro() {
    this.router.navigate(['/registro']);
  }

  cerrarSesion() {
    this._authService.cerrarSesion();
    this.router.navigate(['/login']);
  }

    // Nueva función para ir a la página de reportes
    irReportes() {
      this.router.navigate(['/reportes']); // Asegúrate de tener una ruta configurada para "/reportes"
    }
  
}

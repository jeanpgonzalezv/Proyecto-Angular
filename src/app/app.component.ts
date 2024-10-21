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
    // Aquí puedes agregar cualquier lógica adicional al iniciar la aplicación
  }

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem('authToken'); // Verifica si hay un token en sessionStorage
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

  // Nueva función para ir a la página de postulaciones
  irPostulacion() {
    this.router.navigate(['/postulacion-barbero']); // Asegúrate de tener una ruta configurada para "/postulacion-barbero"
  }
}

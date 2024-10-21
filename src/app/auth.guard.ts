import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AutentificacionService } from 'src/app/service/autentificacion/autentificacion.service'; // Importa tu servicio
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AutentificacionService, // Usa tu servicio de autenticación
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.estaAutenticado()) {
      return true; // Si está autenticado, permite el acceso
    } else {
      return this.router.parseUrl('/login'); // Si no está autenticado, redirige al login
    }
  }
}

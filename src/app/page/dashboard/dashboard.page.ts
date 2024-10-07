import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/service/usuarios/usuarios.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  usuario: Usuario | undefined;

  constructor(private router: Router, private _usuarioService: UsuariosService) { }

  ngOnInit() {
    // Obtener el username del estado de navegación
    const nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombre'];
    console.log('Username recibido:', nombre);

    // Buscar el usuario en el servicio
    this.usuario = this._usuarioService.obtener_info_usuario(nombre);
    
    if (!this.usuario) {
      console.error('Usuario no encontrado');
    } else {
      console.log('Usuario encontrado:', this.usuario);
    }
  }

  obtenerAdministrador() {
    const esAdministrador = this.usuario?.role.some(rol => rol.nombre === 'administrador');
    return esAdministrador;
  }
}

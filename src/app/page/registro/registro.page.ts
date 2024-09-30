import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/service/usuarios/usuarios.service';
import { AutentificacionService } from 'src/app/service/autentificacion/autentificacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  nuevo_usuario: Usuario = {
    rut: '',
    nombre: '',
    correo: '',
    password: '',
    fecha_nacimiento: '',
    role: []
  };

  constructor(
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() { }

  registrarUsuario() {
    console.log('Datos del usuario antes de agregar:', this.nuevo_usuario);
    this.usuariosService.agregar_usuario(this.nuevo_usuario);
    this.resetFormulario();
    console.log('Usuario registrado:', this.nuevo_usuario);
  }

  private resetFormulario() {
    this.nuevo_usuario = {
      rut: '',
      nombre: '',
      correo: '',
      password: '',
      fecha_nacimiento: '',
      role: []
    };
  }


}

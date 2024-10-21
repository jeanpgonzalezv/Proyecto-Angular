import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private lista_de_usuarios: Usuario[] = [
    // Lista de usuarios predefinida
    {
      rut: '21281332-k',
      nombre: "Evansims Muñozsim",
      password: "1234",
      correo: "1234",
      fecha_nacimiento: '17/04/2003',
      role: [{ id: 1, nombre: "cliente" }],
    },
    {
      rut: '19774352-2',
      nombre: "Evan Muñoz",
      password: "admin",
      correo: "evanmunozmorales@gmail.com",
      fecha_nacimiento: '17/04/2003',
      role: [{ id: 2, nombre: "administrador" }],
    },
    {
      rut: '20013540-7',
      nombre: "Nicosim Tamayim",
      password: "password123",
      correo: "ejemplo3@ejemplo.com",
      fecha_nacimiento: '25/11/1998',
      role: [{ id: 1, nombre: "cliente" }],
    },
  ];

  constructor() { }

  public obtener_lista_usuarios(): Usuario[] {
    return this.lista_de_usuarios;
  }

  public obtener_info_usuario(correo: string): Usuario | undefined {
    return this.lista_de_usuarios.find(usuario => correo === usuario.correo);
  }

  public agregar_usuario(usuario: Usuario): void {
    // Verificamos si el usuario ya existe antes de agregarlo
    const existeUsuario = this.obtener_info_usuario(usuario.correo);
    if (!existeUsuario) {
      this.lista_de_usuarios.push(usuario);
      console.log('Usuario agregado:', usuario); // Para verificar que el usuario se agrega correctamente
    } else {
      console.log('El usuario ya existe:', existeUsuario); // Mensaje de usuario existente
    }
  }
}

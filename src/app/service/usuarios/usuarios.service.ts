import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private lista_de_usuarios: Usuario[] = [
    // Lista de usuarios predefinida
    {
      rut: '11111-1',
      nombre: "Carlos Mendoxsxaza",
      password: "1234",
      correo: "1234",
      fecha_nacimiento: '01/01/2000',
      role: [{ id: 1, nombre: "cliente" }],
    },
    {
      rut: '11111-2',
      nombre: "Carlos asd",
      password: "password123",
      correo: "ejemplo2@ejemplo.com",
      fecha_nacimiento: '01/02/2000',
      role: [{ id: 2, nombre: "administrador" }],
    },
    {
      rut: '11111-3',
      nombre: "Carlos dsd",
      password: "password123",
      correo: "ejemplo3@ejemplo.com",
      fecha_nacimiento: '01/03/2000',
      role: [{ id: 1, nombre: "cliente" }],
    },
  ];

  constructor() { }

  public obtener_lista_usuarios(): Usuario[] {
    return this.lista_de_usuarios;
  }

  public obtener_info_usuario(username: string): Usuario | undefined {
    return this.lista_de_usuarios.find(usuario => username === usuario.correo);
  }

  public agregar_usuario(usuario: Usuario): void {
    this.lista_de_usuarios.push(usuario);
    console.log('Usuario agregado:', usuario); // Para verificar que el usuario se agrega correctamente
  }

}

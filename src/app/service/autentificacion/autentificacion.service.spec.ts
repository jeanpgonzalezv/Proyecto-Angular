import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Definir la URL de la API
const API_URL = 'http://localhost:3000/api'; 

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {

  constructor(private http: HttpClient) { }

  // Método para registrar un nuevo usuario
  registro(usuario: any): Observable<any> {
    // Aquí se hace un POST a la ruta de registro en la API
    return this.http.post(`${API_URL}/registro`, usuario);
  }

  // Método para iniciar sesión (login)
  login(correo: string, password: string): Observable<any> {
    // Enviar los datos de login a la API
    return this.http.post(`${API_URL}/login`, { correo, password });
  }

  // Método para verificar si el usuario está autenticado
  estaAutenticado(): boolean {
    // Verificar si el token existe en el localStorage
    const token = localStorage.getItem('authToken');
    return !!token; // Retorna verdadero si hay un token, de lo contrario falso
  }

  // Método para obtener el token de autenticación
  obtenerToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para cerrar sesión
  logout(): void {
    // Eliminar el token de localStorage cuando se cierra sesión
    localStorage.removeItem('authToken');
  }
}

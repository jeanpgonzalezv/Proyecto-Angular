import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutentificacionService {
  private apiUrl = 'http://localhost:3000/api/login'; 

  constructor(private http: HttpClient) {}


  public autentificacion(correo: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { correo, password }).pipe(
      tap(response => {
        // Almacenar el token en sessionStorage si la autenticación es exitosa
        if (response.token) {
          sessionStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  public cerrarSesion(): void {
    // Eliminar el token al cerrar sesión
    sessionStorage.removeItem('authToken');
  }

  public estaAutenticado(): boolean {
    // Verificar si hay un token en sessionStorage
    return !!sessionStorage.getItem('authToken');
  }
}

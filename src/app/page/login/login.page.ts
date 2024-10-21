import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutentificacionService } from 'src/app/service/autentificacion/autentificacion.service';
import { AlertController } from '@ionic/angular'; 
import { UsuariosService } from 'src/app/service/usuarios/usuarios.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = "";
  password: string = "";

  constructor(
    private _authService: AutentificacionService,
    private _usuariosService: UsuariosService, // Inyecta el servicio de usuarios
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() { }

  async login(username: string, password: string) {
    // Verificamos si el usuario es autenticado por el servicio
    this._authService.autentificacion(username, password).subscribe({
      next: (response) => {
        console.info("Usuario autenticado:", response);
        
        // Guardamos el nombre de usuario en localStorage
        localStorage.setItem('username', username);
        // Guardamos el token o el estado de autenticación en sessionStorage
        sessionStorage.setItem('authToken', response.token); // Suponiendo que tu API devuelve un token

        // Agregar el usuario a la lista de usuarios
        const usuarioAutenticado = this._usuariosService.obtener_info_usuario(username);
        if (usuarioAutenticado) {
          this._usuariosService.agregar_usuario(usuarioAutenticado);
        }

        // Redirigimos a la página principal después del login
        this.router.navigate(['home'], {
          state: {
            usuario: username
          }
        });
      },
      error: (error) => {
        console.error("Error de autenticación:", error);
        this.mostrarAlerta('Login fallido', 'El nombre de usuario o contraseña es incorrecto.');
      }
    });
  }

  // Método para mostrar alertas en caso de error
  private async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}

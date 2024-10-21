import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular'; // Para mostrar alertas

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
    private router: Router,
    private http: HttpClient,
    private alertController: AlertController // servicio de alertas
  ) {}

  ngOnInit() {}

  async registrarUsuario() {
    const apiUrl = 'http://localhost:3000/api/registro'; // URL de la API local (cambiar si es necesario)

    try {
      // Llamada a la API para registrar usuario
      const response: any = await this.http.post(apiUrl, this.nuevo_usuario).toPromise();
      console.log('Usuario registrado exitosamente', response);
      
      // Mostrar mensaje de éxito
      await this.mostrarAlerta('Registro exitoso', 'El usuario ha sido registrado correctamente.');
      
      // Guardar token en localStorage (si es necesario)
      // localStorage.setItem('authToken', response.token);

      // Redirigir al usuario después de registrar
      this.router.navigate(['/login']);
      
    } catch (error) {
      console.error('Error al registrar el usuario', error);
      
      // Mostrar mensaje de error
      await this.mostrarAlerta('Error en el registro', 'Hubo un problema al registrar el usuario. Intenta nuevamente.');
    }

    // Limpiar el formulario después de la operación
    this.resetFormulario();
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

  // Método para mostrar alertas
  private async mostrarAlerta(titulo: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }
}

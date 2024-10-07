// src/app/page/Barberos/Barberos.page.ts
import { Component, OnInit } from '@angular/core';
import { BarberosService } from '../../service/Barberos/Barberos.service';


@Component({
  selector: 'app-Barberos',
  templateUrl: './Barberos.page.html',
  styleUrls: ['./Barberos.page.scss'],
})
export class BarberosPage implements OnInit {

  // Variable para almacenar la lista de Barberos
  Barberos: any[] = [];

  // Objeto para un nuevo Barbero
  nuevoBarbero = {
    region: '',
    nombre_completo: '',
    posee_carnet: '',
    annos_experiencia: '',
    barberia_trabajo: '',
    fecha_publicacion: '',
  };

  constructor(private BarberosService: BarberosService) { }

  ngOnInit() {
    // Cargar los Barberos existentes al iniciar el componente
    this.Barberos = this.BarberosService.getBarberos();
  }

  agregarBarbero() {
    // Asignar la fecha actual a nuevoBarbero.fecha_publicacion
    const today = new Date();
    this.nuevoBarbero.fecha_publicacion = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

    // Agregar el nuevo Barbero
    this.BarberosService.agregarBarbero({ ...this.nuevoBarbero });

    // Actualizar la lista de Barberos
    this.Barberos = this.BarberosService.getBarberos();

    // Reiniciar el formulario
    this.nuevoBarbero = {
      region: '',
      nombre_completo: '',
      posee_carnet: '',
      annos_experiencia: '',
      barberia_trabajo: '',
      fecha_publicacion: '',
    };
  }
  }


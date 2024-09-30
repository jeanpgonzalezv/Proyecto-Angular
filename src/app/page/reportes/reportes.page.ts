// src/app/page/reportes/reportes.page.ts
import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../../service/reportes/reportes.service';


@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.page.html',
  styleUrls: ['./reportes.page.scss'],
})
export class ReportesPage implements OnInit {

  // Variable para almacenar la lista de reportes
  reportes: any[] = [];

  // Objeto para un nuevo reporte
  nuevoReporte = {
    region: '',
    tipo_vehiculo: '',
    color: '',
    patente: '',
    modelo: '',
    marca: '',
    fecha_publicacion: '',
  };

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    // Cargar los reportes existentes al iniciar el componente
    this.reportes = this.reportesService.getReportes();
  }

  agregarReporte() {
    // Asignar la fecha actual a nuevoReporte.fecha_publicacion
    const today = new Date();
    this.nuevoReporte.fecha_publicacion = today.toISOString().split('T')[0]; // Formato YYYY-MM-DD

    // Agregar el nuevo reporte
    this.reportesService.agregarReporte({ ...this.nuevoReporte });

    // Actualizar la lista de reportes
    this.reportes = this.reportesService.getReportes();

    // Reiniciar el formulario
    this.nuevoReporte = {
      region: '',
      tipo_vehiculo: '',
      marca: '',
      modelo: '',
      color: '',
      patente: '',
      fecha_publicacion: ''
    };
  }
  }


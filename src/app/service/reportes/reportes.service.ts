import { Injectable } from '@angular/core';
import { Reporte } from 'src/app/models/reporte';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {
  private lista_reportes: Reporte []= [
    {
      color: 'café',
      fecha_publicacion: '2023-09-30',
      marca: 'Desconocido',
      modelo: 'Desconocido',
      patente: 'Desconocido',
      region: 'Metropolitana',
      tipo_vehiculo:'Auto'
    },
    // Puedes agregar más datos de ejemplo aquí
  ];

  constructor() {}

  getReportes() {
    console.log('Obteniendo reportes:', this.lista_reportes); // Verifica que se llama al método
    return this.lista_reportes;
  }

  agregarReporte(reporte: any) {
    this.lista_reportes.push(reporte);
    console.log('Reporte agregado:', reporte); // Verifica que se agrega el reporte
  }
}

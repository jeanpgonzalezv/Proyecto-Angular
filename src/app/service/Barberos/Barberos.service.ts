import { Injectable } from '@angular/core';
import { Barbero } from 'src/app/models/Barbero';

@Injectable({
  providedIn: 'root',
})
export class BarberosService {
  private lista_Barberos: Barbero []= [
    {
      fecha_publicacion: '2023-09-30',
      nombre_completo: 'Jeansim Paulsim',
      barberia_trabajo: 'La cuchilla maldita',
      annos_experiencia: '7',
      region: 'Valparaiso, Viña del Mar',
      posee_carnet:'SI'
    },
  ];

  constructor() {}

  getBarberos() {
    console.log('Obteniendo Barberos:', this.lista_Barberos); // Verifica que se llama al método
    return this.lista_Barberos;
  }

  agregarBarbero(Barbero: any) {
    this.lista_Barberos.push(Barbero);
    console.log('Barbero agregado:', Barbero); // Verifica que se agrega el Barbero
  }
}

import { Component, OnInit } from '@angular/core';
import { BarberosService } from '../service/Barberos/Barberos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  Barberos: any[] = [];

  constructor(private BarberosService: BarberosService) { }

  ngOnInit() {
    // Verifica que el servicio esté funcionando correctamente
    console.log('Obteniendo Barberos en HomePage');
    this.Barberos = this.BarberosService.getBarberos();
    console.log('Barberos en HomePage:', this.Barberos); // Verifica que se obtienen los Barberos
  }

  verificarBarberos() {
    console.log('Barberos en HomePage:', this.Barberos); // Muestra los Barberos en la consola al hacer clic en el botón
  }
}

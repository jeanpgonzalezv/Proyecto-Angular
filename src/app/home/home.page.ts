import { Component, OnInit } from '@angular/core';
import { ReportesService } from '../service/reportes/reportes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  reportes: any[] = [];

  constructor(private reportesService: ReportesService) { }

  ngOnInit() {
    // Verifica que el servicio esté funcionando correctamente
    console.log('Obteniendo reportes en HomePage');
    this.reportes = this.reportesService.getReportes();
    console.log('Reportes en HomePage:', this.reportes); // Verifica que se obtienen los reportes
  }

  verificarReportes() {
    console.log('Reportes en HomePage:', this.reportes); // Muestra los reportes en la consola al hacer clic en el botón
  }
}

import { Component, Input  } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-cloud-coberture',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './cloud-coberture.component.html',
  styleUrl: './cloud-coberture.component.css'
})
export class CloudCobertureComponent {
   
  dailyWeatherData = [
    //Dia, Cobertura de nubes en porcentaje
    { name: 'Lunes', value: 30 },
    { name: 'Martes', value: 22 },
    { name: 'Miercoles', value: 25 },
    { name: 'Jueves', value: 18 },
    { name: 'Viernes', value: 12 },
    { name: 'Sabado', value: 10 },
    { name: 'Domingo', value: 17 },
  ];
}

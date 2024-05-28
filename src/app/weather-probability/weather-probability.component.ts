import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-weather-probability',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './weather-probability.component.html',
  styleUrl: './weather-probability.component.css'
})
export class WeatherProbabilityComponent {

  Dia: string = 'Tendencia de Temperatura Diaria';

  @Input() weatherProbability: any[] = [];

  // single = [
  //   {
  //     "name": "Lluvioso",
  //     "value": 25,
  //   },
  //   {
  //     "name": "Nublado",
  //     "value": 65
  //   },
  //   {
  //     "name": "Despejado",
  //     "value": 10
  //   },
  // ];

}

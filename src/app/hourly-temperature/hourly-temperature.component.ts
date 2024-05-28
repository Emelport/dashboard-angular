import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-hourly-temperature',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './hourly-temperature.component.html',
  styleUrl: './hourly-temperature.component.css'
})
export class HourlyTemperatureComponent {

  @Input() hourlyTemperature: any[] = [];  // Input para recibir las temperaturas por hora

  // hourlyTemperature = [
  //   { name: '12:00', value: 30 },
  //   { name: '13:00', value: 31 },
  //   { name: '14:00', value: 32 },
  //   { name: '15:00', value: 33 },
  //   { name: '16:00', value: 34 },
  //   { name: '17:00', value: 33 },
  //   { name: '18:00', value: 32 },
  //   { name: '19:00', value: 31 },
  //   { name: '20:00', value: 30 },
  //   { name: '21:00', value: 29 },
  //   { name: '22:00', value: 28 },
  //   { name: '23:00', value: 27 }
  // ];

  lineData = [
    {
      name: 'Temperatura',
      series: this.hourlyTemperature.map(item => ({
        name: item.name,
        value: item.value
      }))
    }
  ];
  
  xAxisLabel = 'Hora';
  yAxisLabel = 'Temperatura (°C)';

  constructor() { }
  
}

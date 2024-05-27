import { Component } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-daily-temperature-trend',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './daily-temperature-trend.component.html',
  styleUrl: './daily-temperature-trend.component.css'
})
export class DailyTemperatureTrendComponent {

  xAxisLabel: string = 'Dias de la Semana';
  yAxisLabel: string = 'Temperatura';

  tendenciaTemperaturaDiaria = [
    {
      name: "Semana Equis",
      series: [
        { name: "Lunes", value: 30},  
        { name: "Martes", value: 22 },
        { name: "Miercoles", value: 25 },
        { name: "Jueves", value: 18 },
        { name: "Viernes", value: 12 },
        { name: "Sabado", value: 10 },
        { name: "Domingo", value: 17 },
      ]
    },
  ];

}

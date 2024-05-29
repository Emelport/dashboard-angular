import { Component, Input } from '@angular/core';
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

  @Input() tendenciaTemperaturaDiaria: any[] = [];



}

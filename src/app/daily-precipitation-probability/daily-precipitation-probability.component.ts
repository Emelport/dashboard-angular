import { Component, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-daily-precipitation-probability',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './daily-precipitation-probability.component.html',
  styleUrl: './daily-precipitation-probability.component.css'
})
export class DailyPrecipitationProbabilityComponent {

  @Input() data: any[] = []

  barData = this.data.map(data => ({
      name: data.name,
      series: [
        { name: "Precipitación", value: data.value },
      ]
    }));
  
  view: [number,number] = [700, 400];
  xAxisLabel = 'Dias';
  yAxisLabel = 'Probabilida de precipitación';


}

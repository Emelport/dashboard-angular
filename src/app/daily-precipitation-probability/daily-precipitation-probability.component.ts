import { Component, Input,OnChanges,SimpleChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-daily-precipitation-probability',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './daily-precipitation-probability.component.html',
  styleUrl: './daily-precipitation-probability.component.css'
})
export class DailyPrecipitationProbabilityComponent implements OnChanges{

  @Input() data: any[] = []

  barData = this.data;
  
  view: [number,number] = [700, 400];
  xAxisLabel = 'Dias';
  yAxisLabel = 'Probabilida de precipitación';

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      console.log('ngOnChanges called', this.data);
      this.updateChartData();
    }
  }

  updateChartData() {
    this.barData = this.data.map(data => ({
      name: data.name,
      series: [
        { name: "Precipitación", value: data.value },
      ]
    }));
  }


}

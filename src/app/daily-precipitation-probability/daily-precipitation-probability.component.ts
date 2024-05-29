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


//   this.dailyPrecipitationProbability = [
            
//     {name: datax.list[5].dt_txt, value: datax.list[5].pop},
//     {name: datax.list[13].dt_txt, value: datax.list[13].pop},
//     {name: datax.list[21].dt_txt, value: datax.list[21].pop},
//     {name: datax.list[29].dt_txt, value: datax.list[29].pop},
//     {name: datax.list[37].dt_txt, value: datax.list[37].pop}

// ];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      console.log('ngOnChanges called', this.data);
      this.updateChartData();
    }
  }

  updateChartData() {
    this.barData = this.data.map(data => ({
      name: data.name.split(" ")[0],
      value: data.value * 100
    }));
  }
}

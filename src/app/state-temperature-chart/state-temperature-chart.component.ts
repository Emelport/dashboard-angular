import { Component, Input,SimpleChanges,OnChanges  } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-state-temperature-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './state-temperature-chart.component.html',
  styleUrl: './state-temperature-chart.component.css'
})
export class StateTemperatureChartComponent implements OnChanges {

  // Definición de la propiedad con la firma de índice
  @Input() temperaturasPorEstado: { [key: string]: any }[] = [];


  barData: any[] = [];
  xAxisLabel = 'Estados';
  yAxisLabel = 'Temperatura (°C)';

  colorScheme = {
    domain: ['#5AA454', '#E44D25']
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['temperaturasPorEstado'] && this.temperaturasPorEstado) {
      // Mapeo de los datos usando la firma de índice
      this.barData = this.temperaturasPorEstado.map(data => ({
        name: data['name'],
        series: [
          { name: 'Temperatura Máxima', value: data['valueMax'] },
          { name: 'Temperatura Mínima', value: data['valueMin'] }
        ]
      }));
    }
  }

}
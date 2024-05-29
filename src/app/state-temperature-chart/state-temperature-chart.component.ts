  import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
  import { NgxChartsModule } from '@swimlane/ngx-charts';

  @Component({
    selector: 'app-state-temperature-chart',
    standalone: true,
    imports: [NgxChartsModule],
    templateUrl: './state-temperature-chart.component.html',
    styleUrl: './state-temperature-chart.component.css'
  })
  export class StateTemperatureChartComponent implements OnChanges{

    // Imputación de datos de temperatura por estado
    @Input() temperaturasPorEstado: any[] =[] // Input para recibir las temperaturas por estado
    

    // Configuración de la gráfica de ngx-charts
    
    barData = this.temperaturasPorEstado;
    ngOnChanges(changes: SimpleChanges): void {
      if (changes['temperaturasPorEstado'] && this.temperaturasPorEstado.length > 0) {
        console.log('ngOnChanges called', this.temperaturasPorEstado);
        this.updateChartData();
      }
    }
  
    updateChartData() {
      this.barData = this.temperaturasPorEstado.map(data => ({
        name: data.name,
        series: [
          { name: 'Temperatura Máxima', value: data.valueMax },
          { name: 'Temperatura Mínima', value: data.valueMin }
        ]
      }));
    }

    xAxisLabel = 'Ciudades';
    yAxisLabel = 'Temperatura (°C)';


    constructor() { }
    

  }

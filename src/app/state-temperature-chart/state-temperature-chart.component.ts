import { Component, Input, OnChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-state-temperature-chart',
  standalone: true,
  imports: [NgxChartsModule],
  templateUrl: './state-temperature-chart.component.html',
  styleUrl: './state-temperature-chart.component.css'
})
export class StateTemperatureChartComponent implements OnChanges {

  // Imputación de datos de temperatura por estado
  @Input() temperaturasPorEstado: any[] =[] // Input para recibir las temperaturas por estado


  // temperaturasPorEstado = [
  //   { name: 'Aguascalientes', valueMax: 30, valueMin: 10 },
  //   { name: 'Baja California', valueMax: 28, valueMin: 12 },
  //   { name: 'Baja California Sur', valueMax: 32, valueMin: 15 },
  //   { name: 'Campeche', valueMax: 34, valueMin: 22 },
  //   { name: 'Chiapas', valueMax: 29, valueMin: 18 },
  //   { name: 'Chihuahua', valueMax: 25, valueMin: 8 },
  //   { name: 'Coahuila', valueMax: 27, valueMin: 13 },
  //   { name: 'Colima', valueMax: 31, valueMin: 17 },
  //   { name: 'Durango', valueMax: 26, valueMin: 11 },
  //   { name: 'Guanajuato', valueMax: 29, valueMin: 14 },
  //   { name: 'Guerrero', valueMax: 32, valueMin: 20 },
  //   { name: 'Hidalgo', valueMax: 28, valueMin: 15 },
  //   { name: 'Jalisco', valueMax: 30, valueMin: 16 },
  //   { name: 'México', valueMax: 26, valueMin: 12 },
  //   { name: 'Michoacán', valueMax: 27, valueMin: 14 },
  //   { name: 'Morelos', valueMax: 29, valueMin: 18 },
  //   { name: 'Nayarit', valueMax: 30, valueMin: 19 },
  //   { name: 'Nuevo León', valueMax: 25, valueMin: 10 },
  //   { name: 'Oaxaca', valueMax: 31, valueMin: 21 },
  //   { name: 'Puebla', valueMax: 28, valueMin: 16 }
  // ];
  

  // Configuración de la gráfica de ngx-charts
  
  barData = this.temperaturasPorEstado.map(data => ({
    name: data.name,
    series: [
      { name: 'Temperatura Máxima', value: data.valueMax },
      { name: 'Temperatura Mínima', value: data.valueMin }
    ]
  }));

  xAxisLabel = 'Estados';
  yAxisLabel = 'Temperatura (°C)';


  ngOnChanges() {
    this.barData = this.temperaturasPorEstado.map(data => ({
      name: data.name,
      series: [
        { name: 'Temperatura Máxima', value: data.valueMax },
        { name: 'Temperatura Mínima', value: data.valueMin }
      ]
    }));
  }


  constructor() { }
  

}

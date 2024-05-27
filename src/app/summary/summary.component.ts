import { Component } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  Localizacion: string = 'Los Mochis';
  Pais: string = 'Mexico';
  Imagen: string = 'https://via.placeholder.com/40';
  Temperatura: string = '35°C'
  SensacionTermica: string = 'RealFeel 33°'

}

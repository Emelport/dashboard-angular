import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  @Input() weatherData: any ={};


  // weatherData = [
  //   {
  //     temperature: 39,
  //     high: 41,
  //     low: 36,
  //     feelsLike: 31,
  //     visibility: 10,
  //     dewPoint: 37,
  //     wind: 13,
  //     humidity: 92,
  //     cloudiness: 100,
  //     sunrise: '07:13 AM',
  //     sunset: '04:29 PM',
  //     condition: 'Ideal Conditions',
  //     description: 'Clear Sky',
  //     icon: '../../img/set04/medium/7.png'
  //   }
  // ];

}

import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-temperatureintheday',
  standalone: true,
  imports: [],
  templateUrl: './temperatureintheday.component.html',
  styleUrl: './temperatureintheday.component.css'
})
export class TemperatureinthedayComponent {

// @Input() dailyTemperature: any[] = [];
dailyTemperature: any[] = [
  {
    hora: '00:00',
    temperatura: 25,
    humedad: 80,
  },
  {
    hora: '06:00',
    temperatura: 30,
    humedad: 75,
  },
  {
    hora: '12:00',
    temperatura: 35,
    humedad: 70,
  },
  {
    hora: '18:00',
    temperatura: 30,
    humedad: 75,
  },
];

constructor() {
  console.log('dailyTemperature', this.dailyTemperature);


 }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { StateTemperatureChartComponent } from './state-temperature-chart/state-temperature-chart.component';
import { HourlyTemperatureComponent } from './hourly-temperature/hourly-temperature.component';
import { DailyPrecipitationProbabilityComponent } from './daily-precipitation-probability/daily-precipitation-probability.component';
import { DailyTemperatureTrendComponent } from './daily-temperature-trend/daily-temperature-trend.component';
import { WindSpeedDirectionComponent } from './wind-speed-direction/wind-speed-direction.component';
import { WeatherProbabilityComponent } from './weather-probability/weather-probability.component';
import { SummaryComponent } from './summary/summary.component';
import { CloudCobertureComponent } from './cloud-coberture/cloud-coberture.component';
import * as L from 'leaflet';
import { Map } from 'leaflet';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    InteractiveMapComponent,
    StateTemperatureChartComponent,
    NavBarComponent,
    FormsModule,
    DailyPrecipitationProbabilityComponent,
    DailyTemperatureTrendComponent,
    WindSpeedDirectionComponent,
    WeatherProbabilityComponent,
    HourlyTemperatureComponent,
    SummaryComponent,
    CloudCobertureComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  //GRAFICA 1
  temperaturasPorEstado:any[] = [];
  temperaturasPorHora:any[] = [];
  dailyWeatherData:any[] = [];

  title = 'weather-dashboard';

  private apiUrl = 'https://www.meteosource.com/api/v1/free/find_places?text=';
  private apiKey = 'usf68syu2e2cbqcv3ru0kwkm56y3vptp7cngm8vl'; // Reemplaza con tu clave API válida
   newOptions = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 7,
    center: L.latLng(19.42847, -99.12766)
  };
  prueba = {
    lat: 19.42847,
    lon: -99.12766,
    zoom: 7
  }
  mapToNumberCoords(coords: string): number{
    const direccion = coords[coords.length-1]
    if (direccion === 'S' || direccion === 'W'){
      return parseFloat(coords.slice(0, -1)) * -1
    }
    return parseFloat(coords.slice(0,-1))
  }
  buscarCiudadMapa(city: string):void {
    console.log('Buscando ciudad:', city);
    
    this.getCityData(city).subscribe(data => {
      console.log(data);
      const place_id = data[0].place_id;
      const date = '2021-10-10';
      console.log(place_id);

      this.getWeatherData(place_id, date).subscribe(data => {
        console.log(data);
        // this.newOptions.center = L.latLng(this.mapToNumberCoords(data.lat),this.mapToNumberCoords(data.lon));
        this.prueba = {
          lat: this.mapToNumberCoords(data.lat),
          lon: this.mapToNumberCoords(data.lon),
          zoom: 12
        }
      }); 

    });
    
  }
  constructor(private http: HttpClient) {

   

      // this.getTemperatureData('los-mochis', '2021-10-10').subscribe(data => {
      //   console.log(data);
      // });


  }

  getCityData(city: string): Observable<any> {
    console.log(this.apiKey);
    const url = `${this.apiUrl}${city}&key=${this.apiKey}`;
    const data = this.http.get(url);
    console.log(url);
    return data;

  }

  getWeatherData(place_id: string, date: string): Observable<any> {
    //https://www.meteosource.com/api/v1/free/point?place_id=los-mochis&sections=current%2Chourly&timezone=UTC&language=en&units=auto&key=usf68syu2e2cbqcv3ru0kwkm56y3vptp7cngm8vl
    const url = `https://www.meteosource.com/api/v1/free/point?place_id=${place_id}&sections=current&timezone=UTC&language=en&units=auto&key=${this.apiKey}`;
    const data = this.http.get(url);
    console.log(url);
    return data;
  }

  getTemperatureData(place_id: string, date: string): Observable<any> {
      const url = `https://www.meteosource.com/api/v1/flexi/time_machine?place_id=${place_id}&date=${date}&timezone=UTC&units=metric&key=${this.apiKey}`;
      const data = this.http.get(url);
      return data;
  }

  windSpeed = [
    {
      "name": "Lunes",
      "value": 20
    },
    {
      "name": "Martes",
      "value": 40
    },
    {
      "name": "Miercoles",
      "value": 20
    },
    {
      "name": "Jueves",
      "value": 60
    },
    {
      "name": "Viernes",
      "value": 80
    }
  ];


}

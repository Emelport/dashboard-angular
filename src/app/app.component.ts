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
import { TemperatureinthedayComponent } from './temperatureintheday/temperatureintheday.component';


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
    CloudCobertureComponent,
    TemperatureinthedayComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {

  //GRAFICA 1

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

  icon = `https://www.meteosource.com/static/img/ico/weather/1.svg`

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

        this.getWeatherData2(this.mapToNumberCoords(data.lat), this.mapToNumberCoords(data.lon)).subscribe(data => {
          console.log("Weather 2",data);
        });

        this.icon = `https://www.meteosource.com/static/img/ico/weather/${data.current.icon_num}.svg`
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

  //OBTENCION DE DATOS
  getWeatherData(place_id: string, date: string): Observable<any> {
    const url = `https://www.meteosource.com/api/v1/free/point?place_id=${place_id}&sections=current&timezone=UTC&language=en&units=auto&key=${this.apiKey}`;
    const data = this.http.get(url);

    console.log(url);
    return data;
  }

  getWeatherData2(lat: any, lon:any){
    const apiKey = '1e90f84992af854d86aab5ff2a78ffc5';
    const url = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`
    return this.http.get(url);
    
  }


  getTemperatureData(place_id: string, date: string): Observable<any> {
      const url = `https://www.meteosource.com/api/v1/flexi/time_machine?place_id=${place_id}&date=${date}&timezone=UTC&units=metric&key=${this.apiKey}`;
      const data = this.http.get(url);
      return data;
  }

  getWindData(data: any) {
    // A partir de data obtener la velocidad y dirección del viento
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

  dailyWeatherData = [
    //Dia, Cobertura de nubes en porcentaje
    { name: 'Lunes', value: 30 },
    { name: 'Martes', value: 22 },
    { name: 'Miercoles', value: 25 },
    { name: 'Jueves', value: 18 },
    { name: 'Viernes', value: 12 },
    { name: 'Sabado', value: 10 },
    { name: 'Domingo', value: 17 },
  ];

  dailyPrecipitationProbability = [
    //Dia, Probabilidad de precipitacion
    { name: 'Lunes', value: 30 },
    { name: 'Martes', value: 22 },
    { name: 'Miercoles', value: 25 },
    { name: 'Jueves', value: 18 },
    { name: 'Viernes', value: 12 },
    { name: 'Sabado', value: 10 },
    { name: 'Domingo', value: 17 },
  ];

  tendenciaTemperaturaDiaria = [
    {
      name: "Semana Equis",
      series: [
        { name: "Lunes", value: 30},  
        { name: "Martes", value: 22 },
        { name: "Miercoles", value: 25 },
        { name: "Jueves", value: 18 },
        { name: "Viernes", value: 12 },
        { name: "Sabado", value: 10 },
        { name: "Domingo", value: 17 },
      ]
    },
  ];

  hourlyTemperature = [
    { name: '12:00', value: 30 },
    { name: '13:00', value: 31 },
    { name: '14:00', value: 32 },
    { name: '15:00', value: 33 },
    { name: '16:00', value: 34 },
    { name: '17:00', value: 33 },
    { name: '18:00', value: 32 },
    { name: '19:00', value: 31 },
    { name: '20:00', value: 30 },
    { name: '21:00', value: 29 },
    { name: '22:00', value: 28 },
    { name: '23:00', value: 27 }
  ];

  temperaturasPorEstado = [
    { name: 'Aguascalientes', valueMax: 30, valueMin: 10 },
    { name: 'Baja California', valueMax: 28, valueMin: 12 },
    { name: 'Baja California Sur', valueMax: 32, valueMin: 15 },
    { name: 'Campeche', valueMax: 34, valueMin: 22 },
    { name: 'Chiapas', valueMax: 29, valueMin: 18 },
    { name: 'Chihuahua', valueMax: 25, valueMin: 8 },
    { name: 'Coahuila', valueMax: 27, valueMin: 13 },
    { name: 'Colima', valueMax: 31, valueMin: 17 },
    { name: 'Durango', valueMax: 26, valueMin: 11 },
    { name: 'Guanajuato', valueMax: 29, valueMin: 14 },
    { name: 'Guerrero', valueMax: 32, valueMin: 20 },
    { name: 'Hidalgo', valueMax: 28, valueMin: 15 },
    { name: 'Jalisco', valueMax: 30, valueMin: 16 },
    { name: 'México', valueMax: 26, valueMin: 12 },
    { name: 'Michoacán', valueMax: 27, valueMin: 14 },
    { name: 'Morelos', valueMax: 29, valueMin: 18 },
    { name: 'Nayarit', valueMax: 30, valueMin: 19 },
    { name: 'Nuevo León', valueMax: 25, valueMin: 10 },
    { name: 'Oaxaca', valueMax: 31, valueMin: 21 },
    { name: 'Puebla', valueMax: 28, valueMin: 16 }
  ];
  weatherProbability = [
    {
      "name": "Lluvioso",
      "value": 25,
    },
    {
      "name": "Nublado",
      "value": 65
    },
    {
      "name": "Despejado",
      "value": 10
    },
  ];

  summary = {
    Localizacion: 'Los Mochis',
    Pais: 'Mexico',
    Imagen: 'https://via.placeholder.com/40',
    Temperatura: '35°C',
    SensacionTermica: 'RealFeel 33°'
  }

  
}

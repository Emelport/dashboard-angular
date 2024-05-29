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

  dailyWeatherData2:any[] = [];  //[{dia:temperatura}...]
  windSpeed2 : any[] = [];
  hourlyTemperature2:any[] = [] // (x Hora x Semana)
  temperaturasPorEstado2:any[] = []
  weatherProbability2:any[] = []
  summaryWeather2:any = {}
  dailyTemperatura2:any[] = [] // hora temperatura y humedad

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
  formatUnixTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000); // Multiplicar por 1000 para convertir segundos a milisegundos
    return date.toLocaleString(); // Utilizar toLocaleString() para formatear según la configuración local
  }

  buscarCiudadMapa(city: string):void {
    console.log('Buscando ciudad:', city);
    
    this.getCityData(city).subscribe(data => {
        console.log(city, " ", data[0].lat, " ", data[0].lon)
        this.prueba = {
          lat: this.mapToNumberCoords(data[0].lat),
          lon: this.mapToNumberCoords(data[0].lon),
          zoom: 12
        }

        this.getWeatherData2(this.mapToNumberCoords(data[0].lat), this.mapToNumberCoords(data[0].lon)).subscribe((datax:any) => {
    
          this.dailyWeatherData2 = [
            {name :datax.list[5].dt_txt, value: datax.list[5].main.temp},
            {name :datax.list[13].dt_txt, value: datax.list[13].main.temp},
            {name :datax.list[21].dt_txt, value: datax.list[21].main.temp},
            {name :datax.list[29].dt_txt, value: datax.list[29].main.temp},
            {name :datax.list[37].dt_txt, value: datax.list[37].main.temp}
          ]
          this.windSpeed2 = [
            {name :datax.list[5].dt_txt, value: datax.list[5].wind.speed},
            {name :datax.list[13].dt_txt, value: datax.list[13].wind.speed},
            {name :datax.list[21].dt_txt, value: datax.list[21].wind.speed},
            {name :datax.list[29].dt_txt, value: datax.list[29].wind.speed},
            {name :datax.list[37].dt_txt, value: datax.list[37].wind.speed}
          ]

          this.hourlyTemperature2 = datax.list.map((item:any) => { 
            return { name: item.dt_txt, value: item.main.temp}
          })

          this.weatherProbability2 = [
            {name: 'Precipitacion', value: datax.list[5].pop},
            {name: 'Lluvia', value: datax.list[5].rain ? datax.list[5].rain['3h'] : 0},
          ]
 

          this.summaryWeather2 = {
            temperature: datax.list[5].main.temp,
            high: datax.list[5].main.temp_max,
            low: datax.list[5].main.temp_min,
            feelsLike: datax.list[5].main.feels_like,
            visibility: datax.list[5].visibility,
            wind: datax.list[5].wind.speed,
            humidity: datax.list[5].main.humidity,
            cloudiness: datax.list[5].clouds.all,
            sunrise: this.formatUnixTimestamp(datax.city.sunrise),
            sunset: this.formatUnixTimestamp(datax.city.sunset),
            condition: datax.list[5].weather[0].main,
            description: datax.list[5].weather[0].description
          }

          this.dailyTemperatura2 = [
            {name: datax.list[7].dt_txt, value: datax.list[1].main.temp, humidity: datax.list[1].main.humidity},
            {name: datax.list[1].dt_txt, value: datax.list[2].main.temp, humidity: datax.list[2].main.humidity},
            {name: datax.list[3].dt_txt, value: datax.list[3].main.temp, humidity: datax.list[3].main.humidity},
            {name: datax.list[5].dt_txt, value: datax.list[4].main.temp, humidity: datax.list[4].main.humidity},
          ]
            
          
          
        });
        // ---------------------TEMPERATURAS POR ESTADOS PERO SON CIUDADES ---------------------
        // guadalajara   20.66682N   103.39182W
        // ciudad de mexico   19.42847N   99.12766W
        // los angeles   34.05223N   118.24368W
        // california   38.3004N   76.50745W
        // tijuana   32.5027N   117.00371W
        const guadalajaralat = this.mapToNumberCoords('20.66682N')
        const guadalajaralon = this.mapToNumberCoords('103.39182W')
        const ciudadmexicolat = this.mapToNumberCoords('19.42847N')
        const ciudadmexicolon = this.mapToNumberCoords('99.12766W')
        const losangeleslat = this.mapToNumberCoords('34.05223N')
        const losangeleslon = this.mapToNumberCoords('118.24368W')
        const californialat = this.mapToNumberCoords('38.3004N')
        const californialon = this.mapToNumberCoords('76.50745W')
        const tijuanalat = this.mapToNumberCoords('32.5027N')
        const tijuanalon = this.mapToNumberCoords('117.00371W')
        this.getWeatherData2(guadalajaralat, guadalajaralon).subscribe((data:any) => {
          this.temperaturasPorEstado2.push({name: 'Guadalajara', valueMax: data.list[0].main.temp_max, valueMin: data.list[0].main.temp_min})
        })
        this.getWeatherData2(ciudadmexicolat, ciudadmexicolon).subscribe((data:any) => {
          this.temperaturasPorEstado2.push({name: 'Ciudad de Mexico', valueMax: data.list[0].main.temp_max, valueMin: data.list[0].main.temp_min})
        })
        this.getWeatherData2(losangeleslat, losangeleslon).subscribe((data:any) => {
          this.temperaturasPorEstado2.push({name: 'Los Angeles', valueMax: data.list[0].main.temp_max, valueMin: data.list[0].main.temp_min})
        })
        this.getWeatherData2(californialat, californialon).subscribe((data:any) => {
          this.temperaturasPorEstado2.push({name: 'California', valueMax: data.list[0].main.temp_max, valueMin: data.list[0].main.temp_min})
        })
        this.getWeatherData2(tijuanalat, tijuanalon).subscribe((data:any) => {
          this.temperaturasPorEstado2.push({name: 'Tijuana', valueMax: data.list[0].main.temp_max, valueMin: data.list[0].main.temp_min})
        })

    });
    
  }
  constructor(private http: HttpClient) {}

  getCityData(city: string): Observable<any> {
    const url = `${this.apiUrl}${city}&key=${this.apiKey}`;
    const data = this.http.get(url);
    return data;

  }

  getWeatherData2(lat: any, lon:any){
    const apiKey = '1e90f84992af854d86aab5ff2a78ffc5';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
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

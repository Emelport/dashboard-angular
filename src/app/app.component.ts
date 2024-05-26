import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InteractiveMapComponent } from './interactive-map/interactive-map.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { StateTemperatureChartComponent } from './state-temperature-chart/state-temperature-chart.component';
import { DailyPrecipitationProbabilityComponent } from './daily-precipitation-probability/daily-precipitation-probability.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InteractiveMapComponent,StateTemperatureChartComponent,NavBarComponent,FormsModule,DailyPrecipitationProbabilityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //GRAFICA 1
  temperaturasPorEstado: { [key: string]: any }[] = [];


  title = 'weather-dashboard';

  
  private apiUrl = 'https://www.meteosource.com/api/v1/free/find_places?text=';
  private apiKey = 'usf68syu2e2cbqcv3ru0kwkm56y3vptp7cngm8vl'; // Reemplaza con tu clave API válida


  constructor(private http: HttpClient) {

      const city = 'Los Mochis';
      this.getCityData(city).subscribe(data => {
        console.log(data);
        const place_id = data[0].place_id;
        const date = '2021-10-10';
        console.log(place_id);

        this.getWeatherData(place_id, date).subscribe(data => {
          console.log(data);
        });

      });

      this.getTemperatureData('los-mochis', '2021-10-10').subscribe(data => {
        console.log(data);
      });


  }

  getCityData(city: string): Observable<any> {
    console.log(this.apiKey)
    const url = `${this.apiUrl}${city}&key=${this.apiKey}`;
    const data = this.http.get(url);
    return data;

  }

  getWeatherData(place_id: string, date: string): Observable<any> {
    //https://www.meteosource.com/api/v1/free/point?place_id=los-mochis&sections=current%2Chourly&timezone=UTC&language=en&units=auto&key=usf68syu2e2cbqcv3ru0kwkm56y3vptp7cngm8vl
    const url = `https://www.meteosource.com/api/v1/free/point?place_id=${place_id}&sections=hourly&timezone=UTC&language=en&units=auto&key=${this.apiKey}`;
    const data = this.http.get(url);
    return data;
  }

  getTemperatureData(place_id: string, date: string): Observable<any> {
      const url = `https://www.meteosource.com/api/v1/flexi/time_machine?place_id=${place_id}&date=${date}&timezone=UTC&units=metric&key=${this.apiKey}`;
      const data = this.http.get(url);
      return data;
  }


}

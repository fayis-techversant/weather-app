import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(
    private weatherService: WeatherServiceService,
    private router: Router
  ) {}

  cityName: string = '';
  temp: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  pressure: number = 0;
  humidity: number = 0;

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherdata(cityName).subscribe({
      next: (response) => {
        this.cityName = response.name;
        this.temp = response.main.temp;
        this.temp_max = response.main.temp_max;
        this.temp_min = response.main.temp_min;
        this.humidity = response.main.humidity;
        this.pressure = response.main.pressure;

        // navigates to the details page
        this.router.navigate(['/details'], {
          queryParams: {
            cityName: this.cityName,
            temp: this.temp,
            temp_max: this.temp_max,
            temp_min: this.temp_min,
            humidity: this.humidity,
            pressure: this.pressure,
          },
        });
      },
    });
  }
}

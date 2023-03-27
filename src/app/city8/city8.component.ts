import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherServiceService } from '../services/weather-service.service';

@Component({
  selector: 'app-city8',
  templateUrl: './city8.component.html',
  styleUrls: ['./city8.component.css'],
})
export class City8Component {
  constructor(
    private weatherService: WeatherServiceService,
    private router: Router
  ) {}
  cityName: string = 'New Delhi';
  temp: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  humidity: number = 0;
  wind: number = 0;

  getWeatherData() {
    this.weatherService.getWeatherdata(this.cityName).subscribe({
      next: (response) => {
        this.cityName = response.name;
        this.temp = response.main.temp;
        this.temp_max = response.main.temp_max;
        this.temp_min = response.main.temp_min;
        this.humidity = response.main.humidity;
        this.wind = response.wind.speed;
      },
    });
  }

  navigate() {
    this.router.navigate(['/details'], {
      queryParams: {
        cityName: this.cityName,
        temp: this.temp,
        temp_max: this.temp_max,
        temp_min: this.temp_min,
        humidity: this.humidity,
        wind: this.wind,
      },
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { Test } from './models/test';
import { WeatherData } from './models/weather.model';
import { WeatherServiceService } from './services/weather-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  weatherDataa?: WeatherData;
  cityName: string = '';

  title = 'weather-app';
}

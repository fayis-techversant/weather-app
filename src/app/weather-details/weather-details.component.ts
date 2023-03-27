import { Component, Input, OnInit } from '@angular/core';
import { Test } from '../models/test';
import { WeatherData } from '../models/weather.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent implements OnInit {
  cityName: string = '';
  temp: number = 0;
  temp_min: number = 0;
  temp_max: number = 0;
  wind: number = 0;
  humidity: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log('city varunnonn nokk');

    this.route.queryParams.subscribe((params) => {
      const cityNameParam = params['cityName'];
      const tempParam = params['temp'];
      const temp_minParam = params['temp_min'];
      const temp_maxParam = params['temp_max'];
      const windParam = params['wind'];
      const humidityParam = params['humidity'];

      if (cityNameParam) {
        this.cityName = cityNameParam;
        console.log('city vannu: ' + this.cityName);
      }
      if (tempParam) {
        this.temp = tempParam;
        console.log('temp vannu: ' + this.temp);
      }
      if (temp_minParam) {
        this.temp_min = temp_minParam;
        console.log('temp min vannu: ' + this.temp_min);
      }
      if (temp_maxParam) {
        this.temp_max = temp_maxParam;
        console.log('city vannu: ' + this.cityName);
      }
      if (humidityParam) {
        this.humidity = humidityParam;
        console.log('humidity vannu: ' + this.humidity);
      }
      if (windParam) {
        this.wind = windParam;
        console.log('wind vannu: ' + this.wind);
      }
    });
  }

  @Input() weatherDataa?: WeatherData;
}

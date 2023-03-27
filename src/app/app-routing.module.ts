import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { AppComponent } from './app.component';
import { City1Component } from './city1/city1.component';
import { MainComponent } from './main/main.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

const routes: Routes = [
  { path:'', component:MainComponent },
  { path:'details', component:WeatherDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

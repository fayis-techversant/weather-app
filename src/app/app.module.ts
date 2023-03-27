import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { City1Component } from './city1/city1.component';
import { City2Component } from './city2/city2.component';
import { City3Component } from './city3/city3.component';
import { City4Component } from './city4/city4.component';
import { City5Component } from './city5/city5.component';
import { City6Component } from './city6/city6.component';
import { MainComponent } from './main/main.component'
import { FormsModule } from '@angular/forms';
import { City7Component } from './city7/city7.component';
import { City8Component } from './city8/city8.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDetailsComponent,
    City1Component,
    City2Component,
    City3Component,
    City4Component,
    City5Component,
    City6Component,
    MainComponent,
    City7Component,
    City8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

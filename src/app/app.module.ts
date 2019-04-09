import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {PlanetService} from './planet.service';
import {RouteService} from './route.service';
import { RouteinfoComponent } from './routeinfo.component';
import {FlexModule} from '@angular/flex-layout';
import {DecimalPipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    RouteinfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    HttpClientModule,
    MatCheckboxModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    FlexModule,

  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

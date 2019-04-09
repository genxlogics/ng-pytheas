import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PlanetModel} from './planet.model';
import {PlanetService} from './planet.service';
import {RouteService} from './route.service';
import {RouteModel} from './route.model';
import {CommonModule, formatNumber} from '@angular/common';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';

const planetUrl = 'http://localhost:8080/pytheas/planets';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'exoplanet-explorer';
  withTraffic = false;
  available = false;
  planets: PlanetModel[] = [];
  routes: RouteModel[] = [];
  @Output() routeAvailable = new EventEmitter<string>();
  selected = '';
  displayColumns: string[] = ['planetId', 'planetName', 'planetCode', 'distancefromEarth', 'prevPlanetId'];
  onSubmit(): void {
  }
  constructor(private plSrv: PlanetService, private routeSrv: RouteService, private dcpipe: DecimalPipe) {}
  ngOnInit(): void {
    this.plSrv.getPlanetList().subscribe(result => this.planets = result);
  }

  findRoute(): void {
    this.routeSrv.discoverRouteTo(this.selected, this.withTraffic)
      .subscribe((resp => {
        this.routes = resp.body as RouteModel[];
        this.available = true;})
        , error => console.log('Oops..', error));
  }
  getTotalDistance(): any {
    console.log('planet code = ', this.selected);
    console.log(this.routes);
    console.log('total distance =', this.routes.find(x => x.planetCode === this.selected ).distanceFromEarth);
    return this.routes.find(x => x.planetCode === this.selected ).distanceFromEarth;
  }

}

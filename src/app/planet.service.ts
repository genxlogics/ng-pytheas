import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PlanetModel} from './planet.model';

const planetService = 'http://localhost:8080/pytheas/planets';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }
  getPlanetList(): Observable<PlanetModel[]> {
    return this.http.get<PlanetModel[]>(planetService);
  }
}

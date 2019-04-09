import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {RouteModel} from './route.model';
import {catchError, retry, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';

const routeService = 'http://localhost:5000/pytheas/discover';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  constructor(private http: HttpClient) { }
  discoverRouteTo(routeTo: string, traffic: boolean): Observable<HttpResponse<RouteModel[]>> {
    const params = new HttpParams()
      .set('to', routeTo)
      .set('traffic', String(traffic));
    return this.http.get<RouteModel[]>(routeService, {observe: 'response', params});
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodWarzoneCheatersForecastJsonService {

  constructor(private http: HttpClient) { }

  public getCodWarzoneCheatersForecast(): Observable<any> {
    return new Observable((observer) => {
      this.http.get('https://raw.githubusercontent.com/alessadrycruz1987/cod-warzone-cheaters-forecast-json/main/cod-warzone-cheaters-forecast.json').subscribe((response) => {
        observer.next(response);
        observer.complete();
      });
    });
  }
}

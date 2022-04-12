import { Component } from '@angular/core';

import { CodWarzoneCheatersForecastJsonService } from '../services/get/cod-warzone-cheaters-forecast-json.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public forecast: string;
  public playability: string;
  public cheaters_index: string;

  constructor(private codWarzoneCheatersForecastJsonService: CodWarzoneCheatersForecastJsonService) { }

  ngOnInit() {
    this.getCodWarzoneCheatersForecast(null);
  }

  onRefresh(event) {
    console.log('Refreshing...');

    this.getCodWarzoneCheatersForecast(event.target);
  }

  async getCodWarzoneCheatersForecast(target) {
    console.log('Getting forecast...');

    await this.codWarzoneCheatersForecastJsonService.getCodWarzoneCheatersForecast().toPromise().then(data => {
      console.log('Forecast result:', JSON.stringify(data));

      this.forecast = data.forecast;
      this.playability = data.playability;
      this.cheaters_index = data.cheaters_index;

      if (target !== null && typeof target !== 'undefined') target.complete();
    }).catch((error) => {
      console.log('Error in fetching forecast:', error);
    });
  }
}

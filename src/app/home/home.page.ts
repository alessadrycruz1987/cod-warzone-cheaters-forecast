import { Component } from '@angular/core';

import { CodWarzoneCheatersForecastJsonService } from '../services/get/cod-warzone-cheaters-forecast-json.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public game_title: string;
  public forecast_title: string;
  public forecast_message: string;
  public playability_title: string;
  public playability_value: string;
  public cheaters_index_title: string;
  public cheaters_index_value: string;

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

      this.game_title = data.game_title;
      this.forecast_title = data.forecast_title;
      this.forecast_message = data.forecast_message;
      this.playability_title = data.playability_title;
      this.playability_value = data.playability_value;
      this.cheaters_index_title = data.cheaters_index_title;
      this.cheaters_index_value = data.cheaters_index_value;

      if (target !== null && typeof target !== 'undefined') target.complete();
    }).catch((error) => {
      console.log('Error in fetching forecast:', error);
    });
  }
}

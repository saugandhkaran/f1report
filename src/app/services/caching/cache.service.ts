import { Injectable } from '@angular/core';

import { SeasonChampion } from '../../shared/models/season-champion.model';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  constructor() { }

  storeDataInLocalStorage(data) : void {
    let a = this.getDataFromLocalStorage();
    this.setDataInLocalStorage(data);
  }

  getDataFromLocalStorage(): SeasonChampion[] {
    let a = [];
    a = JSON.parse(localStorage.getItem('championList'));
    return a;
  }

  setDataInLocalStorage(data): void {
    data = this.sortTheChampionList(data);
    localStorage.setItem('championList', JSON.stringify(data));
  }

  sortTheChampionList(data): SeasonChampion[] {
    return data.sort((a,b) => parseFloat(a.season) - parseFloat(b.season));
  }
}

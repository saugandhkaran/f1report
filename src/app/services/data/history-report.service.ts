import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, of } from 'rxjs';
import { DriversResponse } from '../../shared/models/drivers-response.model';
import { SeasonHistoryResponse } from 'src/app/shared/models/season-history-response.model';
@Injectable({
  providedIn: 'root'
})
export class HistoryReportService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://ergast.com/api/f1/';
  resultURL = '/results/1.json';
  driverStandingsURL = '/driverStandings.json';

  getChampionsList (year: number): Observable<any> {
    return this.http.get(this.baseURL + year + this.driverStandingsURL).pipe(map((response: DriversResponse) => {
      const driverObject = response.MRData.StandingsTable.StandingsLists[0];
      return {
        data: driverObject
      };
    }));
  }

  getSeasonResult (year: string): Observable<any> {
    return this.http.get(this.baseURL + year + this.resultURL).pipe(map((response: SeasonHistoryResponse) => {
      const seasonObject = response.MRData.RaceTable.Races;
      return {
        data: seasonObject
      };
    }));
    }
  }

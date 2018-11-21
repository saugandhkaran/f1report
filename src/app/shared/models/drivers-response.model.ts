import { SeasonChampion } from './season-champion.model';

export interface DriversResponse {
      MRData: {
        StandingsTable: {
            StandingsLists: [
               {
                   DriverStandings: SeasonChampion
                }
            ],
            season: number;
        }
  };
}

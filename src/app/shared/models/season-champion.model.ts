import { Driver } from './driver.model';
import { Constructors } from './constructors.model';

export interface SeasonChampion {
  DriverStandings: [ {
    Driver: Driver;
    Constructors: Constructors;
    points: number;
    wins: number;
  } ];
  round: number;
  season: number;
}

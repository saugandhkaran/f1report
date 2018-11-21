import { Driver } from './driver.model';
import { Constructors } from './constructors.model';
import { Circuit } from './circuit.model';

export interface SeasonHistory {
  date: string;
  raceName: string;
  season: string;
  time: string;
  Results: [{
    Driver: Driver,
    Constructor: Constructors,
    Circuit: Circuit
  }];
}

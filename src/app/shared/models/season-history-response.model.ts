
import { SeasonHistory } from './season-history.model';

export interface SeasonHistoryResponse {
  MRData: {
    RaceTable: {
      Races: SeasonHistory
    }
  };
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HistoryReportService } from '../../services/data/history-report.service';
import { SeasonChampion } from '../../shared/models/season-champion.model';
import { ConstantService } from '../../services/constant/constant.service';
import { CacheService } from '../../services/caching/cache.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(private historyReportService: HistoryReportService, 
    private constants: ConstantService, private router: Router,
    private cacheService: CacheService) { }

  public championList: SeasonChampion[] = [];

  ngOnInit() {
    this.getListOfChampionsHistory();
  }

  getListOfChampionsHistory() {
    if(!this.cacheService.getDataFromLocalStorage()){
      for (let i = this.constants.startYear; i <= this.constants.endYear; i++) {
        this.getChampionsHistory(i);
      }
    } else {
      this.championList = this.cacheService.getDataFromLocalStorage();
    }
  }

  getChampionsHistory (year): void {
    this.historyReportService.getChampionsList(year).subscribe(
      (data) =>  this.championList.push(data.data),
      (error) => console.log(error),
      () => this.cacheService.storeDataInLocalStorage(this.championList)
    );
  }

  goToSeasonHistory (year, champion) {
    this.router.navigate(['/season-details'] , { queryParams: { year: year, 'champion': champion } });
  }

}

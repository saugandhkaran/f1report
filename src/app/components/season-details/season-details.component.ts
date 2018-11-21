import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SeasonHistory } from '../../shared/models/season-history.model';
import { HistoryReportService } from '../../services/data/history-report.service';

@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styleUrls: ['./season-details.component.css']
})
export class SeasonDetailsComponent implements OnInit {

  constructor(private historyReportService: HistoryReportService, private route: ActivatedRoute, private router: Router) {
    this.fetchDataFromUrl();
  }

  public seasonHistory: SeasonHistory;
  seasonYear: string;
  seasonChampion: string;
  ngOnInit() {
    this.getSeasonHistory();
  }

  getSeasonHistory (): void {
    this.fetchDataFromUrl();
    this.historyReportService.getSeasonResult(this.seasonYear).subscribe((data) => {
    this.seasonHistory = data.data;
    console.log(this.seasonHistory);
    });
  }

  fetchDataFromUrl() {
    this.route.queryParams.subscribe(params => {
      this.seasonYear = params['year'];
      this.seasonChampion = params['champion'];
    });
  }

  goBackToOverviewPage() {
    this.router.navigate(['/overview']);
  }
}

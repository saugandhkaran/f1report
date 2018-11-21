import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from '../app/components/overview/overview.component';
import { SeasonDetailsComponent } from '../app/components/season-details/season-details.component';

const routes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'season-details', component: SeasonDetailsComponent},
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: '**', component: OverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

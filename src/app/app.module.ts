import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './components/overview/overview.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SeasonDetailsComponent
  ],
  imports: [
    BrowserModule,
    ScrollingModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

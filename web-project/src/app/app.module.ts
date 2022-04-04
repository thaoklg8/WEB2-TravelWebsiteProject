import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { TourDetailPageComponent } from './tour-detail-page/tour-detail-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { BookTicketPageComponent } from './book-ticket-page/book-ticket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TourPageComponent,
    TourDetailPageComponent,
    ReviewPageComponent,
    BookTicketPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

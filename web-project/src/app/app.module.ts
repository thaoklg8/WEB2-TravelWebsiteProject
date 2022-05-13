import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsersAdminComponent } from './users-admin/users-admin.component';
import { ToursAdminComponent } from './tours-admin/tours-admin.component';
import { ReviewsAdminComponent } from './reviews-admin/reviews-admin.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { ToastrModule } from 'ngx-toastr';
import { TourDetailPageComponent } from './tour-detail-page/tour-detail-page.component';
import { BookTicketPageComponent } from './book-ticket-page/book-ticket-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { SigninPhonePageComponent } from './signin-phone-page/signin-phone-page.component';
import { SigninEmailPageComponent } from './signin-email-page/signin-email-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { PostReviewComponent } from './post-review/post-review.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    FooterComponent,
    UsersAdminComponent,
    ToursAdminComponent,
    ReviewsAdminComponent,
    TourPageComponent,
    RoutingComponents,
    TourDetailPageComponent,
    BookTicketPageComponent,
    ReviewPageComponent,
    SigninPhonePageComponent,
    SigninEmailPageComponent,
    RegisterPageComponent,
    AdminPageComponent,
    AboutusPageComponent,
    MenuRightComponent,
    PostReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      progressBar:true,
      progressAnimation:'increasing',
      preventDuplicates:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

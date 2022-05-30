import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BookTicketPageComponent } from './book-ticket-page/book-ticket-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProvisionPageComponent } from './provision-page/provision-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { SecurityPageComponent } from './security-page/security-page.component';
import { SigninEmailPageComponent } from './signin-email-page/signin-email-page.component';
import { SigninPhonePageComponent } from './signin-phone-page/signin-phone-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { TourDetailPageComponent } from './tour-detail-page/tour-detail-page.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { ToursAdminComponent } from './tours-admin/tours-admin.component';
import { UsersAdminComponent } from './users-admin/users-admin.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path:'tour', component:TourPageComponent},
  {path:'review', component:ReviewPageComponent},
  {path:'aboutus', component:AboutusPageComponent},
  {path:'register', component:RegisterPageComponent},
  {path:'signinPhone', component:SigninPhonePageComponent},
  {path:'signinEmail', component:SigninEmailPageComponent},
  {path:'adminTour', component:ToursAdminComponent},
  {path:'admin', component:AdminPageComponent},
  {path:'menuRight', component:MenuRightComponent},
  {path:'provision', component:ProvisionPageComponent},
  {path:'security', component:SecurityPageComponent},
  {path:'tourDetail',component:TourDetailPageComponent},
  {path:'adminUser', component:UsersAdminComponent},
  {path: 'book', component:BookTicketPageComponent},
  {path:'postReview',component:PostReviewComponent},
  //
  {path: 'support', component:SupportPageComponent},
  {path: 'contact', component:ContactPageComponent},
  {path: 'blog', component:BlogPageComponent},
  //
  {path: 'profile', component:ProfileUserComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomePageComponent, TourPageComponent]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusPageComponent } from './aboutus-page/aboutus-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuRightComponent } from './menu-right/menu-right.component';
import { ProvisionPageComponent } from './provision-page/provision-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ReviewPageComponent } from './review-page/review-page.component';
import { SecurityPageComponent } from './security-page/security-page.component';
import { SigninEmailPageComponent } from './signin-email-page/signin-email-page.component';
import { SigninPhonePageComponent } from './signin-phone-page/signin-phone-page.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { ToursAdminComponent } from './tours-admin/tours-admin.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [HomePageComponent, TourPageComponent]

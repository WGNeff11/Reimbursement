import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { LandingFmPageComponent } from './pages/landing-fm-page/landing-fm-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'landing',
    component: LandingPageComponent,
  },
  {
    path: 'landing-fm',
    component: LandingFmPageComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

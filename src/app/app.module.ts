import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { ReimbursementComponent } from './components/reimbursement/reimbursement.component';
import { CountCardComponent } from './components/count-card/count-card.component';
import { ReimbursementFormComponent } from './components/reimbursement-form/reimbursement-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ReimbursementPipePipe } from './pipes/reimbursement-pipe.pipe';
import { ReimbursementTypePipePipe } from './pipes/reimbursement-type-pipe.pipe';
import { ReimbursementStatePipe } from './pipes/reimbursement-state.pipe';
import { LandingFmPageComponent } from './pages/landing-fm-page/landing-fm-page.component';
import { ReimbursementFMPipe } from './pipes/reimbursement-fm.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginPageComponent,
    LandingPageComponent,
    RegistrationFormComponent,
    ReimbursementComponent,
    CountCardComponent,
    ReimbursementFormComponent,
    NavBarComponent,
    ReimbursementPipePipe,
    ReimbursementTypePipePipe,
    ReimbursementStatePipe,
    LandingFmPageComponent,
    ReimbursementFMPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

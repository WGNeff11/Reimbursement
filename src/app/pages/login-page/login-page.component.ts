import { Component, OnInit } from '@angular/core';

import {ToggleFormsService} from '../../services/toggle-forms.service';
import { Router } from '@angular/router';
import { ToggleLoginService } from 'src/app/services/toggle-login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public message: string;
  public anti_message: string;
  constructor(private toggler: ToggleFormsService, private router: Router, private toggleLogin: ToggleLoginService) { 
    if(sessionStorage.getItem('currentUser') != null || sessionStorage.getItem('currentUser') != undefined){
      if(JSON.parse(sessionStorage.getItem('currentUser')).role.roleId == 1){
        router.navigateByUrl('/landing-fm');
      } else if(JSON.parse(sessionStorage.getItem('currentUser')).id == 9){
        sessionStorage.removeItem("currentUser");
      } 
      else {
        router.navigateByUrl('/landing');
      }
    }
    toggleLogin.toggleLoggedIn(false);
  }

  ngOnInit(): void {
    this.toggler.currentMessage.subscribe((message) => this.message = message);
    this.toggler.antiMessage.subscribe((antiMessage) => this.anti_message = antiMessage);
  }

  // toggle(): void {
  //   if (this.message === 'Login') {
  //     this.toggler.changeMessage('Registration');
  //     this.toggler.changeAntiMessage('Login');
  //   }
  //   else {
  //     this.toggler.changeMessage('Login');
  //     this.toggler.changeAntiMessage('Registration');
  //   }

  }



import { Component, OnInit } from '@angular/core';
import { User} from '../../models/User';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ToggleFormsService} from '../../services/toggle-forms.service';
import { from } from 'rxjs';
import { ToggleLoginService } from 'src/app/services/toggle-login.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['../login-form/login-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  public firstname: string;
  public lastname: string;
  public username: string;
  public email: string;
  public password: string;
  public password_two: string;

  constructor(private router: Router, private http: HttpClient,
              private toggler: ToggleFormsService, private toggleLogin: ToggleLoginService) { 
    sessionStorage.removeItem('currentUser');
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.toggler.changeMessage('Login');
  }

  async register(): Promise<void> {
    try{
      let user = await this.http.post<User>('http://localhost:8080/Reimbursement/register', {
        username: this.username,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      }, {
        withCredentials: true
      }).toPromise();

      sessionStorage.setItem("currentUser", JSON.stringify(user));
      this.toggleLogin.toggleLoggedIn(true);
      this.router.navigateByUrl('landing');

    } catch(error) {
      let statusNum = error.status;

      if(statusNum === 442) {
        alert("Username already Exists");
      }
      else if(statusNum === 443) {
        alert("Email already associated with an existing account");      }
    }
    









    }
  }



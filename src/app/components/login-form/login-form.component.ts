import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {ToggleFormsService} from '../../services/toggle-forms.service';
import {User} from '../../models/User';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { ToggleLoginService } from 'src/app/services/toggle-login.service';
import { utf8Encode } from '@angular/compiler/src/util';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss', '../login-form/login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public identifier: string = '';
  public password: string = '';
  public message: string;

  constructor(private router: Router, private http: HttpClient, 
              private toggler: ToggleFormsService, private toggleLogin: ToggleLoginService ) { }

  async sendLogin(): Promise<void> {
    try{
        let user = await this.http.post<User>('http://localhost:8080/Reimbursement/login', {
            identifier: this.identifier,
            password: this.password,
          },{
            withCredentials: true,
          }
        ).toPromise();
        
        const user_string = JSON.stringify(user);

        if (user.role.roleId == 1){
          sessionStorage.setItem("currentUser", user_string);
          this.toggleLogin.toggleLoggedIn(true);
          this.router.navigateByUrl('landing-fm');
        }else {
          sessionStorage.setItem("currentUser", user_string);
          this.toggleLogin.toggleLoggedIn(true);
          console.log(JSON.parse(sessionStorage.getItem("currentUser")).role.roleId);
          this.router.navigateByUrl('landing');
        }
      }

      catch (error){
        const statusNum: number = error.status;

        if (statusNum === 450) {
          alert('Invalid Password for given username');
        }
        else if(statusNum === 451){
          alert('Username or Email provided does not exist');
        }
        else{
          alert('login failed');
        }
      }
    }
  ngOnInit(): void {

  }

  toggle(): void {
    this.toggler.changeMessage('Registration');
  }

}

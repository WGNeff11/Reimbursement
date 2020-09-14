import { Component, OnInit } from '@angular/core';
import {ToggleLoginService} from '../../services/toggle-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  loggedIn: boolean;
  loggedOut = !(this.loggedIn);
  constructor(private toggleLoginService: ToggleLoginService, private router: Router) { }

  ngOnInit(): void {
    this.toggleLoginService.loggedIn.subscribe((loggedIn) => this.loggedIn = loggedIn);
  }

  Signout() {
    sessionStorage.removeItem("currentUser");
    this.router.navigateByUrl('/login');
    
  }
  Signin() {
    if(sessionStorage.getItem("currentUser")){
      sessionStorage.removeItem("currentUser");
    }
    this.router.navigateByUrl('/login');
  }

}

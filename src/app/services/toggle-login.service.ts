import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleLoginService {

  private toggleLogin = new BehaviorSubject(false);
  loggedIn = this.toggleLogin.asObservable();
  constructor() { }

  toggleLoggedIn(loggedIn: boolean) {
    this.toggleLogin.next(loggedIn);

  }

}

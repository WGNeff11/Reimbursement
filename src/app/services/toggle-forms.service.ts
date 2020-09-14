import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleFormsService {

  private messageSource = new BehaviorSubject('Login');
  currentMessage = this.messageSource.asObservable();

  private messageSourceTwo = new BehaviorSubject('Registration');
  antiMessage = this.messageSourceTwo.asObservable();
  constructor() { }


  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeAntiMessage(message: string) {
    this.messageSourceTwo.next(message);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountCardServiceService {

  private cardTitles = ['Total Reimbursement Applications', 'Pending Reimbursements', 'Approved Reimbursements', 'Denied Reimbursements'];
  private cardCounts = [0, 0, 0, 0];
  constructor(private http: HttpClient) { 
    this.cardCounts = this.getCounts();

  }

  getCounts() {
    let cardCounts = [];
    
    let cardRequest = this.http.get("http://localhost:8080/Reimbursement/reimbursements");



    
    return cardCounts;
  }
}

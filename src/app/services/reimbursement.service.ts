import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reimbursement } from '../models/reimbursement';

@Injectable({
  providedIn: 'root'
})


export class ReimbursementService {

  private reimbursements = new BehaviorSubject([]);
  currentReimburements = this.reimbursements.asObservable();

  private pendingCount = new BehaviorSubject(0);
  pending = this.pendingCount.asObservable();

  private approvedCount = new BehaviorSubject(0);
  approved = this.approvedCount.asObservable();

  private deniedCount = new BehaviorSubject(0);
  denied = this.deniedCount.asObservable();

  constructor(private http: HttpClient) { }

  async loadReimbursements() {
    let reimbursementPromise = await this.http.get<Reimbursement[]>("http://localhost:8080/Reimbursement/reimbursement", {
      params: {
        user: sessionStorage.getItem("currentUser"),
      }
    }).toPromise();

    let pendCount = 0;
    let appCount = 0;
    let deniedCount = 0;
    for(let reimb of reimbursementPromise){
      if(reimb.reimbursementStatus.status === 'PENDING'){
        pendCount++;
      } else if(reimb.reimbursementStatus.status === 'APPROVED'){
        appCount++;
      } else if(reimb.reimbursementStatus.status ==='DENIED'){
        deniedCount++;
      }
    }
    this.deniedCount.next(deniedCount);
    this.approvedCount.next(appCount);
    this.pendingCount.next(pendCount);
    this.reimbursements.next(reimbursementPromise);
  }
}

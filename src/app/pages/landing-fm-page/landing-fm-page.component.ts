import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Reimbursement } from 'src/app/models/reimbursement';
import { User } from 'src/app/models/User';
import { ReimbursementService } from 'src/app/services/reimbursement.service';
import { ToggleLoginService } from 'src/app/services/toggle-login.service';
import {faReceipt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing-fm-page',
  templateUrl: './landing-fm-page.component.html',
  styleUrls: ['./landing-fm-page.component.scss']
})
export class LandingFmPageComponent implements OnInit {
  public user: User = JSON.parse(sessionStorage.getItem("currentUser"));
  public firstName: string;
  public lastName: string;
  public reimbursements: Reimbursement[];
  public pendingCount;
  public approvedCount;
  public deniedCount;
  public faReceipt = faReceipt;
  public img;
  public reimbStatesTwo = ['Pending', 'Approved', 'Denied'];
  public searchText;
  public reimbTypes = ['All Types', 'Travel', 'Food', 'Lodging', 'Other'];
  public reimbStates = ['All States', 'Pending', 'Approved', 'Denied'];
  public filterByType = 'All Types';
  public filterByStatus = 'All States';


  constructor(private router: Router, private reimburseService: ReimbursementService,
    private http: HttpClient, private sanitizer:DomSanitizer, private toggleLogin: ToggleLoginService) {
      if (!this.user) {
        router.navigateByUrl('login');
      }
      if(sessionStorage.getItem("currentUser")){
        toggleLogin.toggleLoggedIn(true);
      }
        this.firstName = this.user.firstname;
        this.lastName = this.user.lastname;
      }

   ngOnInit(): void {
    this.reimburseService.currentReimburements.subscribe((reimbursements) => this.reimbursements = reimbursements);
    this.reimburseService.pending.subscribe((count) => this.pendingCount = count);
    this.reimburseService.approved.subscribe((count) => this.approvedCount = count);
    this.reimburseService.denied.subscribe((count) => this.deniedCount = count);
    this.updateReimbursements();
  }

  async updateReimbursements() {
    await this.reimburseService.loadReimbursements();
  }

  async submitReimbs() {
    let arr = [];
    for(let reimb of this.reimbursements){
      if (reimb.reimbursementStatus.status.toLowerCase() !== reimb.tempStatus.toLowerCase()){
        arr.push({
          reimbursement_id: reimb.reimbursement_id,
          new_status: reimb.tempStatus,
        });
      }
    }
    let temp = await this.http.post("http://localhost:8080/Reimbursement/update", arr,
    {
      withCredentials: true
    }).toPromise();

    this.reimburseService.loadReimbursements();
  }

  async getImage(id: Reimbursement) {
    let resp = await this.http.get("http://localhost:8080/Reimbursement/receiptImage", {
      params: {
        reimbursementId: id.reimbursement_id.toString()
      },
      responseType: 'blob'
    }).subscribe(data => {
      let unsafeImageUrl = URL.createObjectURL(data);
      this.img = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
    }, error => {
      console.log(error);
    });
  }

  updateTempStatus(reimbursement:Reimbursement, msg: string) {
    reimbursement.tempStatus = msg;
  }


}

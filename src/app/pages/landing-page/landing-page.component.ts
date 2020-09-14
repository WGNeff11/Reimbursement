import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import {ReimbursementService} from '../../services/reimbursement.service';
import { Reimbursement } from 'src/app/models/reimbursement';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faReceipt} from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';
import { ToggleLoginService } from 'src/app/services/toggle-login.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  faReceipt = faReceipt;
  faPlus = faPlus;
  public user: User = JSON.parse(sessionStorage.getItem("currentUser"));
  public firstName: string;
  public lastName: string;
  public reimbursements: Reimbursement[];
  public pendingCount;
  public approvedCount;
  public deniedCount;
  public img;
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

  logReimbs() {
    console.log(this.reimbursements);
  }

  logClick(reimburseID: number){
    console.log("You have clicked button for reimbursement:", reimburseID);
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
}
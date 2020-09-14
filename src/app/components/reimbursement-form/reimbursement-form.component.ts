import { Component, OnInit } from '@angular/core';
import {ReimbursementFormModel} from '../../models/reimbursement-form-model';
import { HttpClient } from '@angular/common/http';
import {ReimbursementService} from '../../services/reimbursement.service';


@Component({
  selector: 'app-reimbursement-form',
  templateUrl: './reimbursement-form.component.html',
  styleUrls: ['./reimbursement-form.component.scss']
})
export class ReimbursementFormComponent implements OnInit {

  public reimb_type;
  public reimb_description;
  public reimb_amount; 
  public reimb_file;
  reimb_types = ['Lodging', 'Travel', 'Food', 'Other'];
  reimbursementFormModel = new ReimbursementFormModel('', '', 'Other', null);
  constructor(private http: HttpClient, private reimbursementService: ReimbursementService) { }

  ngOnInit(): void {
  }

  getCurrentModel(){
    return JSON.stringify(this.reimbursementFormModel);
  }

  logForm(){
    console.log(JSON.stringify(this.reimbursementFormModel));
  }

  async submitReimbursement(): Promise<void> {
    let type_id;
    if(this.reimbursementFormModel.reimbType === 'Lodging') {
      type_id = 1;
    }

    if(this.reimbursementFormModel.reimbType === 'Travel'){
      type_id = 2;
    }

    if(this.reimbursementFormModel.reimbType === 'Food'){
      type_id = 3;
    }

    if(this.reimbursementFormModel.reimbType === 'Other') {
      type_id = 4;
    }

    try {
      let user = JSON.parse(sessionStorage.getItem('currentUser'));
      let user_id =  user.id;
      let formData = new FormData();
      formData.append('users_id', user_id);
      formData.append('reimb_amount', this.reimbursementFormModel.reimbAmount);
      formData.append('description', this.reimbursementFormModel.reimbDescription);
      formData.append('reimb_type_id', type_id);
      formData.append('image_name', this.reimbursementFormModel.reciept.name);
      formData.append('image', this.reimbursementFormModel.reciept);
      console.log(this.reimbursementFormModel.reciept);
      let submitted = await this.http.post<boolean>('http://localhost:8080/Reimbursement/reimbursement', formData,
      {
        withCredentials: true
      }).toPromise();
      console.log(submitted);
    } catch(e){
      console.log(e);
    }
  }

  async submitAndUpdateReimbursement() {
    await this.submitReimbursement().then(() => {
      this.reimbursementService.loadReimbursements();
      this.reimbursementFormModel.reimbAmount = '';
      this.reimbursementFormModel.reimbDescription = '';
      this.reimbursementFormModel.reimbType = 'Other';
    }
    );
  }

  logFile() {
    console.log(this.reimbursementFormModel.reciept);
  }

  handleFileInput(files: FileList){
    this.reimbursementFormModel.reciept = files.item(0);
  }

}

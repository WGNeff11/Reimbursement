import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Reimbursement } from '../models/reimbursement';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  async getImage(reimbursement: Reimbursement) {
    let id = reimbursement.reimbursement_id.toString();
    console.log(id);
  //   let image = await this.http.get("http://localhost/Reimbursement/receiptImage", {
  //   params: {
  //     reimbursementId: id
  //   }
  // }).toPromise();

  //   console.log(image);
  //   return image;
  }


}

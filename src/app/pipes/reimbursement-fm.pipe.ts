import { Pipe, PipeTransform } from '@angular/core';
import { Reimbursement } from '../models/reimbursement';

@Pipe({
  name: 'reimbursementFM'
})
export class ReimbursementFMPipe implements PipeTransform {

  transform(reimbArray: Reimbursement[], searchText: string): any[] {
    if(!reimbArray) return [];
    if(!searchText) return reimbArray;

    searchText = searchText.toLowerCase().trim();

    return reimbArray.filter((reimb) => {
      return (
              (reimb.reimb_amount.toString().includes(searchText)) ||
              (reimb.reimbursementStatus.status.toLowerCase().includes(searchText)) ||
              (reimb.reimbursementType.reimbursement_type.toLowerCase().includes(searchText)) ||
              ((reimb.author.firstname.toLowerCase() + ' ' + reimb.author.lastname.toLowerCase()).includes(searchText)) ||
              (reimb.description.toLowerCase().includes(searchText))
            );
    });
  }

}

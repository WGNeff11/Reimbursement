import { Pipe, PipeTransform } from '@angular/core';
import { Reimbursement } from '../models/reimbursement';

@Pipe({
  name: 'reimbursementPipe'
})
export class ReimbursementPipePipe implements PipeTransform {

  transform(reimbArray: Reimbursement[], searchText: string): any[] {
    if(!reimbArray) return [];
    if(!searchText) return reimbArray;

    searchText = searchText.toLowerCase().trim();

    return reimbArray.filter((reimb) => {
      return (
              (reimb.reimb_amount.toString().includes(searchText)) ||
              (reimb.reimbursementStatus.status.toLowerCase().includes(searchText)) ||
              (reimb.reimbursementType.reimbursement_type.toLowerCase().includes(searchText)) ||
              ((reimb.resolver.firstname.toLowerCase() + ' ' + reimb.resolver.lastname.toLowerCase()).includes(searchText))
            );
    });
  }
}

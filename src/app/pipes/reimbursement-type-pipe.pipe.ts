import { Pipe, PipeTransform } from '@angular/core';
import { Reimbursement } from '../models/reimbursement';

@Pipe({
  name: 'reimbursementTypePipe'
})
export class ReimbursementTypePipePipe implements PipeTransform {

  transform(value: Reimbursement[], reimbursementType: String): Reimbursement[]  {

    if (!value){ return []; }
    if (!reimbursementType || reimbursementType === 'All Types'){ return value; }
    reimbursementType = reimbursementType.toLowerCase();

    return value.filter((reimb) => {
      return (reimb.reimbursementType.reimbursement_type.toLowerCase().includes(reimbursementType));
    });
  }

}

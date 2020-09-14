import { Pipe, PipeTransform } from '@angular/core';
import { Reimbursement } from '../models/reimbursement';

@Pipe({
  name: 'reimbursementState'
})
export class ReimbursementStatePipe implements PipeTransform {

    transform(value: Reimbursement[], reimbursementState: string): Reimbursement[]  {

      if (!value){ return []; }
      if (!reimbursementState || reimbursementState === 'All States'){ return value; }
      reimbursementState = reimbursementState.toLowerCase();
  
      return value.filter((reimb) => {
        return (reimb.reimbursementStatus.status.toLowerCase().includes(reimbursementState));
      });
    }
  }

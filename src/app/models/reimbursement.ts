import { User } from './User';
import {ImageService} from '../services/image.service';


export class Reimbursement {
    public reimbursement_id: number;
    public reimb_amount: number;
    public timeSubmitted;
    public timeResolved;
    public description;
    public author: User;
    public resolver: User;
    public reimbursementStatus: ReimbursementStatus;
    public reimbursementType: ReimbursementType;
    public receipt;
    public tempStatus;

    constructor(private imageService: ImageService){
        console.log('contructed');
        this.tempStatus = this.reimbursementStatus.status;
    }


}

export class ReimbursementStatus {
    public status_id;
    public status;
}

export class ReimbursementType {
    public type_id;
    public reimbursement_type;
}


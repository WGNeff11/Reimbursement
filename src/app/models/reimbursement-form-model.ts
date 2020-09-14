export class ReimbursementFormModel {
    constructor(
        public reimbAmount: string,
        public reimbDescription: string,
        public reimbType: string,
        public reciept: File,
    ) {

    }
}

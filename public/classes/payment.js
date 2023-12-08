export class Payment {
    constructor(recipent, details, amount) {
        this.recipent = recipent;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipent} owes ${this.amount} for ${this.details}`;
    }
}

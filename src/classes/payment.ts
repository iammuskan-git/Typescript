import { HasFormattor } from '../interfaces/HasFormattor.js';

export class Payment implements HasFormattor {
    constructor( readonly recipent: string,
                 private details: string,
                 public amount: number
        ){}
    

    format() {
        return `${this.recipent} owes ${this.amount} for ${this.details}`;
    }
}

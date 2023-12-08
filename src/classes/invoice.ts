import { HasFormattor } from '../interfaces/HasFormattor.js';

export class Invoice implements HasFormattor{
    constructor( readonly client: string,
                 private details: string,
                 public amount: number
        ){}
    

    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

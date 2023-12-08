import { ListTemplate } from './classes/ListTemplate.js';
import { Invoice } from './classes/invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormattor } from './interfaces/HasFormattor.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    //tuples
    let values: [string,string,number];
    values = [type.value,details.value,amount.valueAsNumber];

    let doc : HasFormattor;

if(type.value === 'invoice'){
    doc = new Invoice(...values);   // ...values is spread operator
}else{
    doc = new Payment(...values);
}
   list.render(doc , type.value , 'end');
})


//classes

// import { Invoice } from './classes/invoice.js'; // .js dinu parxa kina ki tya compile hunxa

// const inOne = new Invoice("Muskan", "Backend Developer",11);

// console.log(inOne.format());


// let invoices: Invoice[] = [];
// invoices.push(inOne);

// console.log(invoices);


//interfaces
// interface IsPerson {        //yo interface ko structure flow garnu parxa object ,function ley
//     name: string,
//     age:number,
//     speak(a: string): void;
//     spend(a: number): number;
// }
// const me: IsPerson = {
//     name: "Muskan",
//     age: 24,
//     speak(text: string){
//         console.log(text);
//     },
//     spend(amount: number){
//         return amount;
//     }
// }
// console.log(me);

// const you: IsPerson = {
//     name: "Nirmal Baba",
//     age: 24,
//     speak(text: string){
//         console.log(text);
//     },
//     spend(amount: number){
//         return amount;
//     }
// }
// const greet = (you: IsPerson) => {
//     console.log(you.name);
// }
// greet(you);

// GENERICS

// const generics = <T>(user: T) => {        //function vitra object pass gareko hai
//     const uuid = Math.floor(Math.random()*100);
//     return {...user, uuid};
// }
// const docOne = generics({name:"muskan", age:23});
// const docTwo = generics({name:"siskan", age:23});
// console.log(docOne.name);
// console.log(docTwo.name);

// enum ResourceType { PERSON, DIRECTOR, CEO, GUARD};

// interface hello<T> {
//     name: string;
//     resourceName: number,
//     data: T
// }

// const me : hello<string[]> = {
//     name: "muskan",
//     resourceName: ResourceType.PERSON,
//     data: ["hhhhhhhh"]
// }

// const mee : hello<string> = {
//     name: "muskan",
//     resourceName: ResourceType.GUARD,
//     data: "nirmal baba"
// }
// console.log(me,mee);

// let values: [string,string,number];
// values = ["muskan","hamal", 23];
// console.log(values);
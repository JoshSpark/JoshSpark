// const character = 'Mario';

// console.log(character);

// const inputs = document.querySelectorAll('input');

// console.log(inputs);
// inputs.forEach(input => {
//     console.log(input)
// });
//  //arrays
//  let names = [ 'james', 'paul', 'jason'];
//  let mixed = [20, 12, 10, 5, 'James', 'Paul' ,'Susi', true];
//  mixed.push('kemi'[0]);
//  names.push('kemi'[2]);
//  //objects
//  let students = {
//     name: 'Kemi',
//     level: 300,
//     age: 25,
//     tall: true
//  };
//  students = {
//     name: 'Mario',
//     level: 200,
//     age: 20,
//     tall: false,
//  };
// //explicit
// let mycharacters: string;
// let myage: number;
// let myhux: boolean;
// //arrays
// let myninjas: string[]=[];
// myninjas.push('kemi'[0]);
// myninjas.push('mario'[1]);
//mixed
// let mymixed: (string|number)[]=[];
// mymixed.push('james');
// mymixed.push(20); 

// let mymixedninja: string|number;
// mymixedninja = 'people';
// mymixedninja = 30;

// //objects
// let naijaOne: {
//     name: string,
//     age: number,
//     tall: boolean
// }
// naijaOne= {name: 'Mario',  age: 20, tall: false};

// let age: any;
// age= 20;
// console.log(age);
// //Function basics
// let greet: Function;
// greet = () =>{
//     console.log ("Welcome Back");
// }
// const add1 = (a:number, b: number)=>{
//     return a + b;
// }
// let result1 = add1( 12, 15);

// const sub = (a:number, b: number, c: number|string = 5) =>{
//     return a - b;
//     return(c);
// }
// let result = sub( 10, 3, 15);
// const add = (a:number, b: number)=>{
//     return a + b;
// }
// let results = add(23, 12);
//concat
// type StringOrNum = string | number;
// type ObjWithName = {name: string, useId: StringOrNum};
// const LogDetails = (useId: StringOrNum, myitems: string)=>{
//     console.log(`${myitems} is the more ${useId}`);
// }
// const greetings = (use:ObjWithName)=>{
// console.log(`${use.name} says hello`)
// }

//functions
// let greetings: Function;

// greetings = (name: string, school: string) =>{
//     console.log(`${name} attends ${school}`);
// }
// //example 2
// let calc :(a:number, b:number, c:string) =>number;
//  calc = (numOne: number, numTwo: number, action: string) =>{
//     if(action === 'sub'){
//         return numOne - numTwo
//     }else{
//         return numOne + numTwo
//     }
// }
// //example 2
// let logDetails = (Obj:{name: string, school: string, age: number}) => void{}
// type person= {name: string, school: string, age: number};
// logDetails = (niaja: person) =>{ 
//     console.log(`${niaja.name} is a student of ${niaja.school} with ${niaja.age} year old`)
// }

//The DOM and TypeCasting
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const  details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

//eventlistner
form.addEventListener('submit',(e:Event) => {
    e.preventDefault
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
});
//classes
// class Invoice {
//     client: string;
//     details: string;
//     amount: number;

// public constructor (public c: string, d: string, a: number ){}

// public getInvoice (){
//     return `${this.client} owes N${this.amount} for ${this.amount}`
//     }
// }
// const getInvoice2 = new Invoice('mario','works on mario website', 500 );
// const getInvoice3 = new Invoice('paul','works on paul website', 800 );
// const getInvoice4 = new Invoice('jane','works on jane website', 1000 );
// console.log(getInvoice2, getInvoice3, getInvoice4); 

// let invoices : Invoice[] = [];
// invoices.push(getInvoice2);
// invoices.push(getInvoice3);
// invoices.push(getInvoice4);


// invoices.forEach(invi => {
//     console.log(invi.client , invi.details, invi.amount, invi.getInvoice)
// });
// //interfaces with inheritance implement
interface Shape{
    getArea: () => number; 
}

class Rectangle implements Shape{
    public constructor(protected readonly length:number, protected readonly breadth: number, public color:string, public speed: string){}

    public getArea (): number{
        return this.length * this.breadth;
    }
    public getColor(): string{
        return this.color;
    }
    public getSpeed():string{
        return this.speed;
    }
}
//interface with inheritance (extends)

class Square extends Rectangle{
    public constructor(length: number, color: string, speed: string){
        super(length, length, color, speed );
    }
}
const myResult2 = new Rectangle ( 20, 10, "Pink", "20km/h");
console.log(myResult2.getArea());
console.log(myResult2.getColor());
console.log(myResult2.getSpeed());
const mySq = new Square(30, "Red", "200km/h");
console.log(mySq.getArea());

//interface with override 
interface shape{
    triangleArea:()=> number;
}
class Triangle implements shape{
 public constructor (protected readonly height: number, protected readonly base: number, protected readonly color: string){}

 public triangleArea (): number{
 return this.height * this.base;
 }
 public myArea (): string{
    return this.color;
 }
 public toString (): string{
    return `Triangle [height= ${this.height}, base= ${this.base} and color= ${this.color}]`
 }
}
 class mySquare extends Triangle {
    public constructor  (height: number, base: number, color: string){
    super(base, base, color);
    }
 public override toString(): string{
    return`Square [base=${this.base}, color=${this.color}]`;
    }
}
const newSqu = new mySquare(10, 30, 'blue');
console.log(newSqu.toString());

//basic generics
function ListOfNumbers <T>(v1:T, v2: T, v3:T, v4:T): [T, T, T, T]{
        return [v1, v2, v3, v4]; 
    }

console.log(ListOfNumbers<number> (20, 50, 20, 5));

function StudentsResults <D, P>(c1: D, c2: P, c3: D, c4:  P, c5: D, c6: P):[D, P, D, P, D, P]{
    return [c1, c2, c3, c4, c5, c6]
}
console.log(StudentsResults<string, number>('Matthew', 50, 'Peter', 20, 'Rachael', 12));

function Mystudents  <T, S, K>(v1: T, v2: S, m: K): [T, S, K]{
    return [v1, v2, m];
}
console.log(Mystudents<string, number, boolean>('Joshua', 24, true));





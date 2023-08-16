"use strict";
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
const form = document.querySelector('.new-item-form');
console.log(form.children);
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//eventlistner
form.addEventListener('submit', (e) => {
    e.preventDefault;
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
class Rectangle {
    constructor(length, breadth, color, speed) {
        this.length = length;
        this.breadth = breadth;
        this.color = color;
        this.speed = speed;
    }
    getArea() {
        return this.length * this.breadth;
    }
    getColor() {
        return this.color;
    }
    getSpeed() {
        return this.speed;
    }
}
//interface with inheritance (extends)
class Square extends Rectangle {
    constructor(length, color, speed) {
        super(length, length, color, speed);
    }
}
const myResult2 = new Rectangle(20, 10, "Pink", "20km/h");
console.log(myResult2.getArea());
console.log(myResult2.getColor());
console.log(myResult2.getSpeed());
const mySq = new Square(30, "Red", "200km/h");
console.log(mySq.getArea());
class Triangle {
    constructor(height, base, color) {
        this.height = height;
        this.base = base;
        this.color = color;
    }
    triangleArea() {
        return this.height * this.base;
    }
    myArea() {
        return this.color;
    }
    toString() {
        return `Triangle [height= ${this.height}, base= ${this.base} and color= ${this.color}]`;
    }
}
class mySquare extends Triangle {
    constructor(height, base, color) {
        super(base, base, color);
    }
    toString() {
        return `Square [base=${this.base}, color=${this.color}]`;
    }
}
const newSqu = new mySquare(10, 30, 'blue');
console.log(newSqu.toString());
//basic generics
function ListOfNumbers(v1, v2, v3, v4) {
    return [v1, v2, v3, v4];
}
console.log(ListOfNumbers(20, 50, 20, 5));
function StudentsResults(c1, c2, c3, c4, c5, c6) {
    return [c1, c2, c3, c4, c5, c6];
}
console.log(StudentsResults('Matthew', 50, 'Peter', 20, 'Rachael', 12));
function Mystudents(v1, v2, m) {
    return [v1, v2, m];
}
console.log(Mystudents('Joshua', 24, true));

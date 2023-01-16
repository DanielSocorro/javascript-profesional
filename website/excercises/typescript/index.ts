// Interfaces
enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}

let favoriteColor: Color = Color.Blue;
console.log(`my favorite color is ${favoriteColor}`);

//any

let joker: any = 'Joker';
joker = { type: 'wildcard' };

//object

let someObject: object = { type: 'wildcard' };


interface Rectangle {
  width: number;
  height: number;
  color?: Color;
}

let rect: Rectangle = {
  width: 4,
  height: 6,
  //color: Color.Red,
};

function area(r: Rectangle): number {
  return r.height * r.width;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `A Rectangle ${this.color}` : `A Rectangle`;
};

console.log(rect.toString());

let people: string[] = [];
people = ["Maria", "Juana", "Viktor", "Patrick"];
//people.push(9000) <---- error, because only has to be string


let peopleAndNumbers: Array< string | number > = []
peopleAndNumbers.push("Anthony");
peopleAndNumbers.push(9001);

//print
console.log('hello, Typescript');

function add(a:number, b: number) {
  return a + b;
}
const sum = add(2, 3);

function createAdder (a: number): (number) => number {
  return function(b: number) {
    return b + a;
 }
}

const addFour = createAdder(4);
const fourPlusix = addFour(6);

function fullName(firstName: String, lastName: string = 'Smith'): string {
  return `${firstName} ${lastName}`;
}

const daniel = fullName("Agent");

console.log(daniel);
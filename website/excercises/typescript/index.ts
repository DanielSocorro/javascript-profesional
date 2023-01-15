// Interfaces
enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue'
}

interface Rectangle {
  width: number;
  height: number;
  color?: Color;
}

let rect: Rectangle = {
  width: 4,
  height: 6,
  // color: Color.Red,
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


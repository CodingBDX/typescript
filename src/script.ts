type User = {username: string, lastname: string}
type DateString = Date
type Id = string | number
type Identity<argType> = (arg: argType) => argType
type P = keyof User

function consoleSize<type extends {length: number}>(arg: type): type {
  console.log(arg.length)
  return arg
}

function reverse<T>(arr: readonly T[]): readonly T[] {
  return [...arr].reverse();


}

class A {

  constructor(
    public c:number
  ) {
    
  }
  // private | protected 'enfant' et public
  public a:number = 3


}

class B extends A {

}

class collection<T>{
  constructor(private items: T[]) { }
  
  add(item:T): this {
  this.items.push(item)
  return this 
}

  first(): T | null {
   return this.items[0] || null
  }
}
class subscriber {
  on(this: HTMLInputElement, name:string, cb:Function) {
    
  }
}

const modeCollection = new collection([1,2])
const coco = modeCollection.first()
const lolo = modeCollection.add(5)

const aInstance = new A(3);
console.log(aInstance.c)


const abb = consoleSize([3,2])

const compteur = document.getElementById("compteur") as HTMLButtonElement;
const input = document.querySelector('input') as HTMLInputElement
// const b: boolean = true;
// const array: string[] = [];
const user: User = { username: "john", lastname: "john" }
const date: DateString = new Date();
// const cb: Function = (e: MouseEvent): number => {return 3 };
function first<type>(arg: type): type {
  return arg;
}

const aa = first(['rdc', 'rfg', 'fh'])

// function printId(id: string | number): void {
  
// console.log(id.toString())
// }
let i = 0;


// 2 exemples
class Point {
  x = 0
  y = 3
}

class Geometry {
  x = 0
  y=3
}
function getX(p: Point) {
  
  return p.x
}
getX(new Geometry())
const increment = (e: Event) => {
  e.preventDefault();
  i++;
  const span = compteur.querySelector('span')
  if (span) {
    span.innerText = i.toString();
  }
}

compteur?.addEventListener('click', increment)

console.log(date)


abstract class GeometryNext {
  y = 0
  x = 0
  
abstract surface(): number
}
class Triangle extends GeometryNext {
  y = 3
  x = 4
  surface() {
    return 3
  }
}

// abstract class Geologism  {
//   static #origin = {x:number,y:number}
//   static {
//     Geologism.#origin = {x:2,y:4}
//   }
// }

// Geologism.origin


interface Point {
  x: number
  y:number
}
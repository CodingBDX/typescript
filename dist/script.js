"use strict";
function multiply(a, b) {
    a * b;
}
multiply(6, 1);
function consoleSize(arg) {
    console.log(arg.length);
    return arg;
}
function reverse(arr) {
    return [...arr].reverse();
}
class A {
    constructor(c) {
        this.c = c;
        // private | protected 'enfant' et public
        this.a = 3;
    }
}
class B extends A {
}
class collection {
    constructor(items) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
        return this;
    }
    first() {
        return this.items[0] || null;
    }
}
class subscriber {
    on(name, cb) {
    }
}
const modeCollection = new collection([1, 2]);
const coco = modeCollection.first();
const lolo = modeCollection.add(5);
const aInstance = new A(3);
console.log(aInstance.c);
const abb = consoleSize([3, 2]);
const input = document.querySelector('input');
// const b: boolean = true;
// const array: string[] = [];
const user = { username: "john", lastname: "john" };
const date = new Date();
// const cb: Function = (e: MouseEvent): number => {return 3 };
function first(arg) {
    return arg;
}
const aa = first(['rdc', 'rfg', 'fh']);
// function printId(id: string | number): void {
// console.log(id.toString())
// }
let i = 0;
// 2 exemples
class Point {
    constructor() {
        this.x = 0;
        this.y = 3;
    }
}
class Geometry {
    constructor() {
        this.x = 0;
        this.y = 3;
    }
}
function getX(p) {
    return p.x;
}
getX(new Geometry());
// const increment = (e: Event) => {
//   e.preventDefault();
//   i++;
//   const span = compteur.querySelector('span')
//   if (span) {
//     span.innerText = i.toString();
//   }
// }
// compteur?.addEventListener('click', increment)
// console.log(date)
class GeometryNext {
    constructor() {
        this.y = 0;
        this.x = 0;
    }
}
class Triangle extends GeometryNext {
    constructor() {
        super(...arguments);
        this.y = 3;
        this.x = 4;
    }
    surface() {
        return 3;
    }
}
var time;
(function (time) {
    time["introduction"] = "intro";
    time["look"] = "look";
    time["basket"] = "basket";
    time["paiment"] = "paiement";
})(time || (time = {}));
const step = time.look;
console.log(step);
// abstract class Geologism  {
//   static #origin = {x:number,y:number}
//   static {
//     Geologism.#origin = {x:2,y:4}
//   }
// }
// Geologism.origin
function example(a) {
    if (a instanceof Date) {
        a;
    }
    else {
        a;
    }
}
function example2(a) {
    if (Array.isArray(a)) {
        a[2];
    }
    else {
        a;
    }
}
function example3(a) {
    if ("value" in a) {
        a;
    }
}
function isMyDate(a) {
    return a instanceof Date;
}

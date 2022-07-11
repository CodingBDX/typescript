Typescript
---
c'est un langage qui est plus strict permet de comprendre vraiment ce que l'on fait

argument type
---
si on passe 2 type a une function est qu'on met une condition if else, il sera la valeur prendre avec instandeof
```ts
function example(a: string | Date) {
  if (a instanceof Date) {
    a 
  }else{a}
}
```
L'opérateur instanceof permet de tester si un objet possède, dans sa chaîne de prototype, la propriété prototype d'un certain constructeur.

marche aussi avec les tableaux
```ts
function example(a: string | string[]) {
  if (Array.isArrray(a)) {
    a 
  }else{a}
}
```

il peut aussii detecter ce qui fait partie d'un element ,  value fait partie d'un input est non d'un mouseevent
```ts
function example3(a: MouseEvent | HTMLInputElement) {
  if ("value" in a) {
    a
  }
}

```

quand on connait la valeur de return d'une function, ex: au lieu d'ecrire boolean, on ecrit a is Date
```ts
function isMyDate(a: any):a is Date{
  return a instanceof Date
}
```

on peut l'invoquer dans les autres functions sans probleme

quand on sait qu'une valeur ne peut etre null, on met un point d'exclamation
vous pouvez mettre un as pour definir le type d'une div ou autre.
```ts
const compteur = document.getElementById("compteur")! as HTMLButtonElement;
```
## les types en amont
on peut creer nos propres types ou alias
```ts
type User = {username:string, lastname:string}
```

pour comprendre le type retourner sans mettre des any.

```ts
function jean<ArgType>(a:ArgType): ArgType{
  return a;
};

const aa = jean(3)
```
ici il comprend que c'est de type nombre, marche aussi avec un tableau, ou il comprend que c'est du string en retour
```ts
function jean<ArgType>(a:ArgType[]): ArgType{
  return a;
};

const aa = jean(["hvh","dcvb","sdfgh"])
```

on peut utiliser Array qui est un type generique pour les tableaux
```ts
function jean<ArgType>(a:ArgType[]): ArgType{
  return a;
};

const aa: Array<string | number> = jean(["hvh","dcvb",3])
```

pour aussi speciifier un type
```ts
type dodo<argType> = (arg:argType) => argType
```

pour la propriete lenght il faut la definir aussi
La propriété arguments.length contient le nombre d'arguments passés à la fonction.
```ts
function jean<ArgType extends {length:number}>(a:ArgType[]): ArgType{
  return console.log(a.length);
};

const aa: Array<string | number> = jean([3,5,3])
```

on peut recuper les cles d'un type
type Myuser = keyof user[]
on recupere toute les valeurs de user ou en specifiant user['firstname']

## les interfaces
elle s'ecrive comme ceci, on peut aussi imbriquer des methodes
```ts
interface Point{
  x:number
  getser(): number

}
```
il s'exprime comme un objet
les interfaces peuvent fusionner contraire au type, on peut appeler une interface avec le meme nom

pour travailler avec une interface dans une class, on est oblige d'indiquer les valeurs contenue dans l'interface
```ts
class joJOJOle implements Point{
  x:0;
  y:2;
}
```

ce n'est pas oblige d'indiquer implements car il devine en function des valeurs, l'interface utilise

## unknow
il faut eviter au maximun le type any, quand on connait pas les valeurs, plutot unknow
```ts
function(a: unknow){
  if(a instanceOf HTMLInputElement){
    a.value = "jbkuj vgjh"
  }
}
```

## litteral
les litteral, c'est quand on nous dit, la valeur lu et non le type
```ts
const uu = 'erer'
```
ici, il donne erer au lieu de string, dans un objet il faut preciser as la fin si on veut associer un type
```ts
const uu = {isPrivate:false, isPublic:true} as const
```
marche aussi avec les tableaux
```ts
const uu = [] as const
```

## tuple
pour signifier chaque valeur a un endroit precis
```ts
const uu: [string, number] = ['hhjk', 3] 
```

different de
```ts
const uu: (string, number)[] = ['ghj','dfg',2]

```
ce dernier peut contenir dans l'ordre aleatoire, plusieurs, string ou nombres

pour appeller un tuple dans une function
```ts
function merge<t: extends unknow[], u: extends unknow[]>(a:t, b:u):[...t, ...u] {
  return [...a, ...b]
}

const b = merge(a,b)
```

on peut inserer d'autre chose dans le tableau
```ts
const b = merge(a,b, [1,2,5])
```
il reconnait sans soucis

## acceder a une valeur dans un tableau

classique
```ts
console.log(index[0].toUppercase())
```

quand on verifie sans tuple les valeurs d'un tableau
```ts
const tableau: string[] = []
```

il ne va pas comprendre les valeurs et les mettre en undifined
donc dans tsconfig.json, il faut rajouter
```ts
 "noUncheckedIndexedAccess": true
```

ensuite il faut le passer dans une condition

```ts

const tableau: string[] = []

if(tableau[0]) {
  console.log(tableau[0].touppercase();)
}
```

pas besoin de condition sur un tupple car il sait combien il y a de type et quoi

##enum
```ts
enum time {
  introduction,
  look, 
  basket,
  paiment
}
```
on peut donner des valeurs au cles de l'element pour s'y retrouver plus simplement

```ts
enum time {
  introduction = 'intro',
  look = 'look', 
  basket,
  paiment
}

const step = time.look

console.log(step);
```





# Challenge 5: Battle Royale of frameworks and libraries

## Instructions

There are so many frameworks and libraries that we don't know what to use anymore. So a committee has decided to do a kind of Hunger Games to decide which technology stays.

It has put all the technologies in a random circle. The technology at index 0 starts by killing the one just to the right (index + 1).

The next turn goes to the living technology to the right of the one that just died. And so on until there is only one left. See this example of a group of 10 technologies, step by step:

```
         5
      6     4
   7           3
   8           2
      9     1
         0

0 kills 1
2 kills 3
4 kills 5
6 kills 7
8 kills 9

         X
     6      4
   X           X
   8           2
      X     X
         0

0 kills 2
4 kills 6
8 kills 0

         X
     X      4
   X           X
   8           X
      X     X
         X

4 kills 8

         X
     X      4
   X           X
   X           X
      X     X
         X
```

The technology in index 4 is the one that has survived.

Now, to prove that we are able to create an algorithm that works, we have the midudev community patron list: https://codember.dev/mecenas.json

You have to create an algorithm that tells us which user would survive using the same system.

How to submit the solution:
- Send the solution with the submit command, and the index of the person who survives and their username, separated by a hyphen.

For example, if the surviving user is facundopacua and is at index 8 it would be:

```bash
$ submit facundocapua-8
```

## Solution

```js
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./mecenas.json'))

const battleRoyale = (frameworks) => {
    let survivors = []
    for(let i = 0; i < frameworks.length; i++){
        //me guardo la posición original de cada elemento en la primera iteración de la función recursiva
        frameworks.length === data.length 
            ? i % 2 === 0 && survivors.push(`${frameworks[i]}-${i}`)
            : i % 2 === 0 && survivors.push(frameworks[i])
    }
    
    //en caso de que el frameworks resultante sea impar borramos el primero ya que lo matan también
    frameworks.length % 2 !== 0 && survivors.shift()
    return frameworks.length === 1 ? frameworks[0] : battleRoyale(survivors)
    
}

console.log(`submit ${battleRoyale(data)}`)
```

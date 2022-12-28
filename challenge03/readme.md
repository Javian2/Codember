# Challenge 3: The colourful zebra

## Instructions

TMChein is already getting ready for the holidays and wants to start decorating the house with Christmas lights.

She wants to buy one but her favourite ones are the ones with two alternating colours. Like a two-coloured zebra.

She has made the lights into arrays and each position a colour. And he wants to know which lights have the longest zebras and which is the last colour in that succession of colours. For example:

```
['red', 'blue', 'red', 'blue', 'green'] -> 4, blue
['green', 'red', 'blue', 'gray'] -> 2, gray
['blue', 'blue', 'blue', 'blue'] -> 1, blue
['red', 'green', 'red', 'green', 'red', 'green'] -> 6, green
['red, 'red, 'blue', 'red', 'red, 'red', 'green'] -> 3, red
```

Notice that it only wants to know the length when two colours alternate. Once the alternation of the two colours is broken, it stops counting.

Now that you know this, https://codember.dev/colors.txt

Remember:
- A colour zebra is when two colours alternate back and forth.
- If a colour is repeated in the next position or is a third colour, then it stops counting.
- What we want to calculate is the longest zebra-shaped strip of colours and the last colour in that strip of colours.

How to submit the solution:
- Use the "submit" command to submit your solution. For example:

```bash
$ submit 62@red
```

## Solution

```js
const fs = require('fs')
const data = JSON.parse(fs.readFileSync('./colors.txt', 'utf8'))

let counter = 0
let maxCounter = 0;
let finalColor = data[0];

for(let i = 0; i < data.length; i++){
    let nextColor = data[i + 1]
    let lastColor = data[i - 1]
    let currentColor = data[i]

    counter++;
    
    if(currentColor === nextColor || currentColor === lastColor){
        counter = 1;
    }
    else{
        if(nextColor !== lastColor){
            counter = 2;
        }
    }

    if(counter > maxCounter){
        maxCounter = counter;
        finalColor = lastColor
    }
}

console.log(`submit ${maxCounter}@${finalColor}`)
```

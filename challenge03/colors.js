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

const MIN_NUMBER = 11098;
const MAX_NUMBER = 98123;

const checkPassword = (password) => {
    let fiveCounter = 0;
    let leftRight = true;

    for(let index = 0; index < password.length; index++){
        password[index] == 5 && fiveCounter++;
        if(password[index] > password[index + 1]){
            leftRight = false;
        }
    };

    return fiveCounter >= 2 && leftRight
}

let counter = 0;
let passwordArray = []

for(let i = MIN_NUMBER; i < MAX_NUMBER; i++){
    checkPassword(String(i)) && passwordArray.push(i)
}

console.log(`submit ${passwordArray.length}-${passwordArray[55]}`)

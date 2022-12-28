# Challenge 4: Find your friend's password

## Instructions

A friend of mine bought 5 BitCoins in 2008. The problem is that he had it in a digital wallet... and he can't remember the password!

He asked us for help. And he has given us some clues:

- It is a 5-digit password.
- The password had the number 5 repeated twice.
- The number on the right is always greater than or equal to the number on the left.

He gave us some examples:
```
55678 is correct, it does everything
12555 is correct, it does everything
55555 is correct, it does everything
12345 is incorrect, it does not have a repeated 5.
57775 is incorrect, the numbers do not go in an increasing order.
```

It says the password is between the numbers 11098 and 98123. Can we tell you how many numbers within that range meet those rules?

How to submit the solution:
Send the solution with the submit command, and the number of passwords that meet the criteria along with the password that is at index 55 in the list of valid passwords, separated by a hyphen.

For example, for 87 results and the password 35522 at position 55 it would be:

```bash
$ submit 87-35522
```

## Solution

```js
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
```

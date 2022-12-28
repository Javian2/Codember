# Challenge 2: Catch those cyber criminals!

## Instructions 

A group of cyber criminals are using encrypted messages to communicate. The FBI has asked for our help in decrypting them.

The messages are strings of text that include very long whole numbers and blank spaces. Although the numbers don't seem to make sense... a girl called Alice has discovered that they could use the ASCII code for the lowercase letters.

With her method she has managed to decipher these messages:

```
"109105100117" -> midu
"9911110010110998101114" -> codember
"9911110010110998101114 109105100117" -> codember midu
"11210897121 116101116114105115" -> play tetris
```

But they have intercepted a longer message that they have not been able to intercept and they have told us that it is very important that we decrypt it:

`11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101`

Hints:
- Remember that messages are text strings made up of numbers and blanks.
- The numbers seem to have something to do with ASCII code.
- The blanks seem to be simply spaces...

How to submit the solution
- Use the "submit" command to send your solution with the decoded sentence, in lower case and respecting the blanks. For example:

```bash
$ submit this is fine
```

## Solution

```js
const fs = require('fs')
const data = fs.readFileSync('./encrypted.txt', 'utf8')

const words = (word) => {
    let correctWord = '';
    for (let i = 0; i < word.length;) {
        if (word[i] == 1) {
            let asciiNumber = String.fromCharCode(Number(word.substring(i, i + 3)))
            correctWord += asciiNumber
            i += 3
        } 
        else {
            let asciiNumber = String.fromCharCode(Number(word.substring(i, i + 2)))
            correctWord += asciiNumber
            i += 2
        }
    }
    return correctWord
}

let finalString = ''
data.split(' ').forEach(elementSplit => {
    finalString = finalString + words(elementSplit) + ' '
});

console.log('submit ' + finalString)
```

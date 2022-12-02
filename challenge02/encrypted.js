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




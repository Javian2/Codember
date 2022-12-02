const fs = require('fs')

const data = fs.readFileSync('./users.txt', 'utf8')
const KEYS = ['usr', 'eme', 'psw', 'age', 'loc', 'fll']

let users = data.split(/\r?\n\r?\n/)

const validateUsers = (users) => {
    return users.filter(user => KEYS.every(key => user.includes(key)))
}

const validUsers = validateUsers(users)

let correcatUser = validUsers[validUsers.length - 1].split(' ')[0].split(':')[1]

console.log(`submit ${validUsers.length}${correcatUser}`)
# Challenge 1: Fix Twitter!

## Instructions

Twitter has been bought out and they want to eliminate the bots. They have asked for your help in detecting the number of users in their database that have corrupt data.

The database is very old and in a strange format. Profiles are required to have the following data:

- usr: username
- eme: email
- psw: password
- age: age
- loc: location
- fll: number of followers

Everything is in a file where the user data is a sequence of `key:value` pairs, which can be on the same line or separated by lines, and each user is separated by a line break. Watch out because it can be all messed up!

Example input:

```txt
usr: @midudev eme:mi @gmail.com psw: 123456 age: 22 loc:bcn fll: 82

fll: 111 eme:yrfa @gmail.com usr: @codember psw: 123456 age: 21 loc: World

psw: 11133 loc:Canary fll: 333 usr: @pheralb eme:pheralb @gmail.com

usr: @itziar age: 19 loc:isle psw:aaa fll: 222 eme:itzi @gmail.com
```

The first user YES is valid and has all fields.
The second user IS valid and has all fields.
The third user is NOT valid, the `age` field is missing.
The fourth user is valid and has all fields.

Now that you know this, use this input to detect incorrect users: <https://codember.dev/users.txt>.

Hints:

- Data can be in any order.
- Data can be on the same line or separated by lines.
- Users are separated by a blank line break.
- There may be data that is not needed by the user but that does not make it invalid.

How to submit the solution
Use the "submit" command to submit your solution with the correct number of passports + the name of the last valid user. For example:

```bash
submit 482@midudev
```

## Solution

```js
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
```

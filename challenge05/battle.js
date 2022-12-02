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



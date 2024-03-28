const fs = require('fs')

const usersJson = fs.readFileSync('./users.json', 'utf8')
console.log(usersJson)


//1. leer un fichero con JSON --> con node
//fs= file system //herramientas ya existentes
//readFileSyncc: reads file content synchronously, blocking until complete

//2. ejecutar en node (terminal: node index.js), por defecto en bytes, hay que poner UTF8
// esto es síncrono, ocurre en el momento que se "pide"


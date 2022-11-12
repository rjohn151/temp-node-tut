// Modules - Encapsulated Code (only share minimum)
// CommonJS every file is module (by default)

// const runar = "Runar";
// const adrian = "Adrian";
// const secret = "I have a million dollars in the bank."

// const sayHi = (name) => {
//     console.log(`Hello ${name}`)
// }

const names = require('./names')
const sayHi = require('./util')
const data = require('./alternative')
console.log(data);

sayHi('Ramone')
sayHi(names.runar)
sayHi(names.adrian)
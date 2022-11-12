/*
GLOBALS – NO WINDOW 

__dirname – path to current directory 
__filename – file name 
require – function to use modules (CommonJS) 
module – info about current module (file) 
process – info about environment where the program is being executed 

*/

// console.log(`The directory name: ` + __dirname)
console.log(`The directory name: ${__dirname}`)
console.log(`The filename: ` + __filename)
setInterval(() => {
    console.log("Hello")
}, 1000) //every second
// console.log(require)
// console.log(module)
// console.log(process)


   
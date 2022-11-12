/*
    File Module
    Asynchronously - non-blocking
    Synchrously - blocking
*/

// method
const {readFileSync, writeFileSync} = require('fs');
console.log('start');
// const fs = require('fs')
// fs.read


const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first,second);

// Creates the result-sync.txt file
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    { flag: 'a' }
);

console.log('done with this task');
console.log('start the next task');

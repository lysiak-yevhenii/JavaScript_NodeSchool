// To load module 
const fs = require('fs');
// To read file. Every sync. filesystem methods 
// are end with 'Sync'. This method will return 
// buffer object containing the complete contents 
// of the file
const buf = fs.readFileSync(process.argv[2]);
// Buffer obj. can be converted to strings by simply
// calling the toString() method on them.
const str = buf.toString();
console.log(str.split('\n').length - 1);

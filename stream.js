const fs = require('fs');

const readStream = fs.createReadStream('./docs/bigfile.txt',{encoding:'utf-8'});
const writeStream = fs.createWriteStream('./docs/bigfile1.txt');

readStream.on('data',(chuck)=>{
console.log('reading');
console.log(chuck);
writeStream.write(chuck);

})
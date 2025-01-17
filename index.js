const fs = require('fs');

// Blocking, synchronous way
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
console.log(textIn);


const textOut = `Hello baby doll: ${textIn} <br> ${new Date()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File written');

// Non-blocking, asynchronous way
// Read from file asynchronously
fs.readFile('./txt/start.txt', 'utf-8', function(err, data1) {
  console.log(data1)
});

// Read from 3 files back to back then write to another.
// Avoid doing this. Becomes Callback Hell
fs.readFile('./txt/start.txt', 'utf-8', function(err, data1) {
  console.log(data1)
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', function(err, data2) {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', function(err, data3) {
      console.log(data3);

      fs.writeFile('./txt/final.txt', `${data2} \n ${data3}`  , 'utf-8', err => {
        console.log('Your file has been written')
      });
    });
  });
});

console.log('Reading file')

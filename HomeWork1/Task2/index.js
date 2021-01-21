const fs = require('fs');
const csv = require('csvtojson');

const fileInputName = './resources/nodejs-hw1-ex2.csv'; 
const fileOutputName = './resources/nodejs-hw1-ex2.txt';
const writeStream = fs.createWriteStream(fileOutputName, 'utf8');

csv({
	delimiter:';'
})
	.fromFile(fileInputName)
    .subscribe((row) => {
        writeStream.write(JSON.stringify(row) + '\n');
    })
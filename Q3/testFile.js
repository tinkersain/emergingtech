import FileManager from './fileFunctions.js';

const file = new FileManager('test.txt');

file.writeFile('Hello, World!');
console.log(file.readFile());

file.appendFile('More text.');
console.log(file.readFile());

// file.deleteFile();

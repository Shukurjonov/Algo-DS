// Katta-kichik
// Sonlar ustida amallarning eng muximlaridan biri bu - taqqoslashdir. Ushbu masalada sizga qo'yilgan talab, ikkita butun sonni taqqoslash kerak bo'ladi

const fs = require('fs');
const data = fs.readFileSync(0, 'utf-8');

const [a, b] = data.split(' ').map(x => parseInt(x));
let result = '=';
if (a > b) result = '>';
if (a < b) result = '<';
process.stdout.write( '' + result );
                
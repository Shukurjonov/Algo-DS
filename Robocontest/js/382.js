//Mantiqiy funksiyalar Shoyim juda ham mantiq qiziqadi. Yaqinda esa u mantiqiy funksiyalar bilan tanishdi. Shu vaqtdan beri uni bir savol qiynaydi.Jami N ta argumenti bo`lgan mantiqiy funksiyalarni nechtasining rostlik jadvalida ayni K ta 1 qatnashgan?
const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
let [k, n] = data.split(' ').map( el => parseInt(el))

process.stdout.write('' + mantiqiyFunksiya(k, n))

function mantiqiyFunksiya(k, n) {
    
}
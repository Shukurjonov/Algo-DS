const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let n = parseInt(data)

process.stdout.write( '' + intToText(n) );

function intToText(n) { 
   let result = []
    
    let uch = yuzText(n % 1000);
    n = parseInt(n / 1000);
    let olti = yuzText(n % 1000);
    n = parseInt(n / 1000);
    let toqqiz = yuzText(n % 1000);
    n = parseInt(n / 1000);
    let onikki = yuzText(n % 1000);
    
    if (onikki) result.push(onikki + ' milliard');
    if (toqqiz) result.push(toqqiz + ' million');
    if (olti) result.push(olti + ' ming');
    if (uch) result.push(uch);

    return result.join(' ');
}

function yuzText(n) {
    let birlar = ['bir', 'ikki', 'uch', 'to\'rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to\'qqiz'];
    let onlar = ['o\'n', 'yigirma', 'o\'ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to\'qson']

    let bir = n % 10;
    let on = parseInt(n / 10) % 10;
    let yuz = parseInt(n / 100);

    let result = [];

    if (yuz) result.push(birlar[yuz - 1] + ' yuz');
    if (on) result.push( onlar[on - 1] );
    if (bir) result.push( birlar[bir - 1] )
    
    return result.join(' ')
}

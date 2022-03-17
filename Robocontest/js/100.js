const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');

data = data.split("\n")
let n = parseInt(data[0]);

for (let i = 0; i < n; i++) {
    process.stdout.write('' + kvadrat(...[...data[2*i + 1].split(" "), ...data[2*i + 2].split(" ")].map(el => parseInt(el))) + '\n');
}


function kvadrat(x1, x2, x3, x4, y1, y2, y3, y4) {
    if (x1 == x2)
        if(y1 == y4) return distanse(x1, y1, x2, y2, x1, y1, x4, y4)
            else return distanse(x1, y1, x2, y2, x1, y1, x3, y3)

    if (x1 == x3)
        if (y1 == y2) return distanse(x1, y1, x3, y3, x1, y1, x2, y2)
            else return distanse(x1, y1, x3, y3, x1, y1, x4, y4)
    if (x1 == x4) 
        if(y1 == y3) return distanse(x1, y1, x4, y4, x1, y1, x3, y3)
            else return distanse(x1, y1, x4, y4, x1, y1, x2, y2)
    return "NO"
}


function distanse(x1, y1, x2, y2, x3, y3, x4, y4) {
    let lenA = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    let lenB = Math.sqrt((x4 - x3) ** 2 + (y4 - y3) ** 2)
    if (lenA == lenB)
        return "YES";
    else
        return "NO"
}

const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
data = data.split('')
    
process.stdout.write('' + shirflash(data))
    
function shirflash(chars) {
    let w = Math.ceil(Math.sqrt(chars.length)),
    h = Math.ceil(Math.sqrt(chars.length)),
    result = [];
        
    for (var i = 0; i < h; i++) {
        var j = i, str = '';
        while (j < chars.length) {
            str += chars[j];
            j += w;
        }
        result.push(str);
    }
        
    return result.join(' ');
}
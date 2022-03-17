const fs = require('fs');
let data = fs.readFileSync('input.txt', 'utf-8');
data = data.split('\n');
let n = +data[0]
for (let i = 0; i < n; i++) {
    process.stdout.write('' + egizaklar(+data[2*i+1], data[2*i + 2]) + '\n')
}
function egizaklar(n, arr) {
    arr = arr.split(' ').map(el => parseInt(el));
     
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] != '' || arr[j] != '')
                if (i != j && arr[i] == arr[j]) {
                    arr[i] = '';
                    arr[j] = ''
                    count += 1;
                }
        }
        result += 2 * parseInt(count / 2)
    }
    return result
}
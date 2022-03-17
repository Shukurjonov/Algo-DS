const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let [a, arr] = data.split('\n');
let [n, q] = a.split(' ').map( el => parseInt(el))
arr = arr.split(' ').map( el => parseInt(el))

process.stdout.write( '' + tekshir(n, q, arr) );

function tekshir(n, q, arr) {
    if (geometrik(q, arr)) {
        let d = geometrik(q, arr);
        let b1 = arr[q - 1] * d;
        if (d == 1)
            return n * b1
            
        let result = b1
        for (let i = 2; i <= n; i++) {
            b1 = b1 * d 
            result = (result + b1) % 100000007;   
        }
        return parseInt(result % 100000007);
    }

    if (arifmatik(q, arr)) {
        let d = arifmatik(q, arr);
        let a1 = arr[q - 1] + d;

        let result = a1
        for (let i = 2; i <= n; i++) {
            a1 = a1 + d 
            result = (result + a1) % 100000007;   
        }
        return result % 100000007;
    }
    return 'BILMAYMAN'
}

function arifmatik(q, arr) {
    let d = arr[1] - arr[0];

    for (let i = 2; i < q; i++) {
        if (arr[i] - arr[i - 1] != d)
            return false
    }
    return d;
}

function geometrik(q, arr) {
    let d = arr[1] / arr[0];

    for (let i = 2; i < q; i++) {
        if (arr[i] / arr[i - 1] != d)
            return false
    }
    return d;
}

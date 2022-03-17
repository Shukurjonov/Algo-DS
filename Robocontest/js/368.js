const fs = require('fs');
const data = fs.readFileSync('./test.txt', 'utf-8');

let [a, b, n] = data.split(' ').map(x => parseInt(x));

process.stdout.write('' + rSum2(a, b, n));

function position(a, b, n) {
    if (a > b) {
        [a, b] = [b, a];
    }
    let result = '';
    while (n != 0) {
        if (n % b == 0){
            for (let i = 0; i < parseInt(n / b); i++){
                result += b;
            }
            n = 0
            break;
        }
        result += a;
        n -= a;
    }
    return result
}

function checkIfPossibleRec(x, a, b, isPossible, n) {
    if (x > n)
        return;
    if (isPossible[x])
        return;
    isPossible[x] = true;
    checkIfPossibleRec(x + a, a, b, isPossible, n);
    checkIfPossibleRec(x + b, a, b, isPossible, n);
}

function checkPossible(n, a, b) {
    let isPossible = Array(n + 1).fill(false);
    checkIfPossibleRec(0, a, b, isPossible, n);
    return isPossible[n];
}

function rSum2(a, b, n) {
    if (!checkPossible(n, a, b))
        return -1
    else
        return position(a, b, n);
}




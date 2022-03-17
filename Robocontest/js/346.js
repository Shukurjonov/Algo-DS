const fs = require('fs');
let data = fs.readFileSync("./test.txt", 'utf-8');

let num = parseInt(data);

process.stdout.write( '' + factorialDivisors(num) );


function sieve(n) {
    let allPrimes = [];
    let prime = new Array(n+1);
    
    for(let i = 0; i <= n; i++)
        prime[i] = true;
    
    for (let p = 2; p * p <= n; p++) 
        if (prime[p] == true) 
            for (let i = p*2; i <= n; i += p)
                prime[i] = false;
        
    for (let p = 2; p <= n; p++)
        if (prime[p])
            allPrimes.push(p);

    return allPrimes;
}

function factorialDivisors(n){
    let allPrimes = sieve(n); 
    let result = 1n;
    
    for (let i = 0; i < allPrimes.length; i++) {
        let p = allPrimes[i];
        
        let exp = 0;
        while (p <= n) {
            exp = exp + parseInt(n / p, 10);
            p = p * allPrimes[i];
        }
        
        result = result * BigInt(exp + 1);
    }
    let mod = BigInt(10**9 + 7);
    return Number(result % mod);
}
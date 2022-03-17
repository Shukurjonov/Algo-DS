function isPrime(n) {
    let arr = Array(n + 1).fill(true);
    if (n % 2 == 0) return false;
    for (let i = 0; i <= n; i += 2) {
        arr[i] = false;
    }
    for (let i = 3; i <= n; i += 2) {
        while ()
    }

}

console.log(isPrime(10345987));
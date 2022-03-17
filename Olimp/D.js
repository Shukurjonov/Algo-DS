function sayohat(n, arr) {
    let obj = {};
    for (let el of arr) {
        if (obj[el]) obj[el] += 1;
        else obj[el] = 1;
    }
    return Math.max(...Object.values(obj))
}


process.stdout.write( '' + sayohat(a, b) );

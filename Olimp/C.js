//Massiv go'zalligi

function massivGozzalik(n, arr) {
    arr = arr.sort( (a, b) => a - b);
    let result = 0;
    for (let i = 0; i < parseInt(n / 2); i++) {
        result += arr[n - i - 1] - arr[i];
    }
    return result;
}

console.log(massivGozzalik(5, [10, 15, 3, 10, 1]));
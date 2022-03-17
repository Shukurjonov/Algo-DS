const fs = require('fs');
let data = fs.readFileSync("input.txt", 'utf-8');

let [nk, nums, summa] = data.split("\n")

process.stdout.write( '' + restoran(nk, nums, summa) );

function restoran(nk, nums, summa) {
    let [n, k] = nk.split(' ').map(el => parseInt(el))    
    nums = nums.split(' ').map(el => parseInt(el))    
    summa = parseInt(summa);

    let result = 0;
    for (let i = 0; i < n; i++) {
        if (i != k) result += nums[i];
    }
    return summa - parseInt(result / 2)
}

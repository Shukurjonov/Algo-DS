function maxProduct(arr) {
    if (arr.length === 1) return arr[0];  
    const min = [arr[0]];
    const max = [arr[0]];
    let maxTill = Math.max(min[0], max[0]);
    for (let i = 1; i < arr.length; i++) {
        min[i] = Math.min(arr[i], min[i - 1] * arr[i], max[i - 1] * arr[i]);
        max[i] = Math.max(arr[i], min[i - 1] * arr[i], max[i - 1] * arr[i]);
        if (min[i] > maxTill) maxTill = min[i];
        if (max[i] > maxTill) maxTill = max[i];
    }
    return maxTill;
}

function main() {
    const nums = [2, 3, -2, 4];
    // const nums = [-2, 0, -1];
    console.log(maxProduct(nums))
}

main();

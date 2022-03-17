// Introduction
function maxProduct(arr,n){
    let minVal = BigInt(arr[0]);
    let maxVal = BigInt(arr[0]);
  
    let maxProduct = arr[0];
  
    for (let i = 1; i < n; i++) {
  
        if (arr[i] < 0)
        {
            let temp = maxVal;
            maxVal = minVal;
            minVal =temp;
          
        }
  
        maxVal = Math.max(BigInt(arr[i]), maxVal * BigInt(arr[i]));
        minVal = Math.min(BigInt(arr[i]), minVal * BigInt(arr[i]));
  
        maxProduct = Math.max(maxProduct, maxVal);
    }
    return maxProduct;
}


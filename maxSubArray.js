
/** 
 * {number[]} arr
 */

const maxSubArray = (arr) => {
    let currSum =  getSum(arr, 0, 4);
    let maxSum = 0
    for(let i = 1; i < arr.length - 4; i++){
       currSum =  currSum - arr[i - 1];
       currSum = currSum + arr[i + 3];
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}

const getSum = (arr, start, end) => {
    let sum = 0;
    for(let i = start; i < end; i++){
        sum += arr[i]
    }
    return sum;
}
export default maxSubArray
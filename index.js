import  maxSubArray  from "./maxSubArray.js";

// const maxSubArray = (arr) => {
//     let currSum =  0;
//     let maxSum = 0
//     for(let i = 1; i < arr.length - 4; i++){
//        currSum =  currSum - arr[i - 1];
//        currSum = currSum + arr[i + 3];
//         maxSum = Math.max(currSum, maxSum);
//     }
//     return maxSum;
// }
let arr = [-2, 2, -3, 4, -1, 2, 1 , -5, 4]
console.log(maxSubArray(arr))
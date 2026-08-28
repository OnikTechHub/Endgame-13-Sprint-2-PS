// 1. Reverse a String

/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str){
    let reversedStr = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return reversedStr;
}

console.log(reverseString("hello"));




// 2. Find Maximum

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums){
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i]; 
        }
    }
    
    return max;
}

console.log(findMax([3, 7, 2, 9, 5])); 




// 3. Check for Palindrome

/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str){
    let reversedStr = "";
    
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return str === reversedStr;
}

console.log(isPalindrome("racecar")); 




// 4. Sum Array Elements

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums){
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    
    return sum;
}

console.log(sumArray([10, 20, 30, 40]));
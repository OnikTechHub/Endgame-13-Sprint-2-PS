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



// 5. Count Vowels

/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str){
    const vowels = "aeiou";
    let count = 0;
    
    let lowerStr = str.toLowerCase();
    
    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels("javascript"));


// 6. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target){

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); 



// 7. Flatten a Nested Array

/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr){
    let result = [];
    
    for (let i = 0; i < arr.length; i++) {
        
        if (Array.isArray(arr[i])) {
            let innerFlattened = flattenArray(arr[i]);
            for (let j = 0; j < innerFlattened.length; j++) {
                result.push(innerFlattened[j]);
            }
        } else {
            result.push(arr[i]);
        }
    }
    
    return result;
}

console.log(flattenArray([1, [2, [3, 4], 5]])); 
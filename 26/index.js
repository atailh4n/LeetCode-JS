let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[uniqueIndex] = nums[i];
            uniqueIndex++;
        }
    }

    return uniqueIndex;
};

console.log("Total:", removeDuplicates(nums));  // Total: 5
console.log("Updated Array:", nums.slice(0, removeDuplicates(nums)));  // [0, 1, 2, 3, 4]

/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let less = [], greater = [], eq = [], results = [];
    for (let i = 0; i < nums.length; i++) {
        const e = nums[i];
        if (e < pivot) {
            less.push(e);
        } else if (e == pivot) {
            eq.push(e);
        } else {
            greater.push(e);
        }
    }
    
    return results.concat(less, eq, greater);
};

console.log(pivotArray([4,0,4,5,-11], 5))
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let arr = [];
    let number = (BigInt(digits.join("")) + BigInt(1)).toString().split("");
    for (let i = 0; i < number.length; i++) {
        const e = number[i];
        arr.push(Number(e));
    }
    return arr;
};

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))
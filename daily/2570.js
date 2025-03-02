/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    let returned = [];

    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i][0] === nums2[j][0]) {
            returned.push([nums1[i][0], nums1[i][1] + nums2[j][1]]);
            i++;
            j++;
        } else if (nums1[i][0] < nums2[j][0]) {
            returned.push(nums1[i]);
            i++;
        } else {
            returned.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) returned.push(nums1[i++]);
    while (j < nums2.length) returned.push(nums2[j++]);

    return returned;
};

console.log(mergeArrays([[1, 2], [2, 3], [4, 5]], [[1, 4], [3, 2], [4, 1]]))
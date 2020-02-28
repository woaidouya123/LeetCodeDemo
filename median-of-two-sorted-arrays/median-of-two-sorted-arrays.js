/**
    题目：
    给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。

    请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

    你可以假设 nums1 和 nums2 不会同时为空。

    示例 1:

    nums1 = [1, 3]
    nums2 = [2]

    则中位数是 2.0
    示例 2:

    nums1 = [1, 2]
    nums2 = [3, 4]

    则中位数是 (2 + 3)/2 = 2.5
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let sorted = [], len1 = nums1.length, len2 = nums2.length;
    if(len1 === 0 || len2 === 0){
        sorted = nums1.concat(nums2)
    }else{
        let i = 0, j = 0;
        while(i<len1 && j<len2){
            if(nums1[i] <= nums2[j]){
                sorted.push(nums1[i]);
                i++;
            }else{
                sorted.push(nums2[j]);
                j++
            }
        }
        if(i === len1){
            sorted = sorted.concat(nums2.slice(j))
        }
        if(j === len2){
            sorted = sorted.concat(nums1.slice(i))
        }
    }
    return (len1+len2)%2==0?(sorted[(len1+len2)/2]+sorted[(len1+len2)/2-1])/2:sorted[Math.ceil((len1+len2)/2)-1];
};

console.log(findMedianSortedArrays([1, 3],[2]))

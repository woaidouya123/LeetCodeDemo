/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0, end = arr.length - 1;
    while(start < end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] > arr[mid+1]){
            end = mid;
        }else{
            start = mid+1;
        }
    }
    return start;
};
// @lc code=end


/**
	题目：数组中的逆序对

	在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。

	 

	示例 1:

	输入: [7,5,6,4]
	输出: 5
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    return findInversePairNum(nums, 0, nums.length - 1);
};

/**
 * @param {number[]} arr
 * @param {number} start
 * @param {number} end
 */
function findInversePairNum(arr, start, end) {
    if (start >= end) return 0;

    const copy = new Array(end - start + 1);
    const length = Math.floor((end - start) / 2); // 左数组长度
    const leftNum = findInversePairNum(arr, start, start + length);
    const rightNum = findInversePairNum(arr, start + length + 1, end);

    let i = start + length;
    let j = end;
    let copyIndex = end - start;
    let num = 0;
    while (i >= start && j >= start + length + 1) {
        if (arr[i] > arr[j]) {
            num += j - start - length;
            copy[copyIndex--] = arr[i--];
        } else {
            copy[copyIndex--] = arr[j--];
        }
    }

    while (i >= start) {
        copy[copyIndex--] = arr[i--];
    }

    while (j >= start + length + 1) {
        copy[copyIndex--] = arr[j--];
    }

    for (let k = start; k <= end; ++k) {
        arr[k] = copy[k - start];
    }

    return num + leftNum + rightNum;
}

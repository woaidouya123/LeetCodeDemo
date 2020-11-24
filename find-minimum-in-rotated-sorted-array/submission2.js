/**
题目：搜索旋转排序数组 II
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

示例 1:

输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
示例 2:

输入: nums = [2,5,6,0,0,1,2], target = 3
输出: false
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
	let left = 0, right = nums.length - 1;
	if(nums[left] === target || nums[right] === target)return true;
	while(left < right){
		console.log(left,right)
		if(nums[left] === target || nums[right] === target)return true;
		let mid = Math.floor((left + right)/2);
		if(target === nums[mid])return true;
		if(target > nums[left]){
			if(target < nums[mid]){
				right = mid-1;
			}else if(nums[mid] > nums[left]){
				left = mid+1;
			}else if(nums[mid] === nums[left]){
                left++;
                right--;
            }else{
				right = mid-1;
			}
		}else{
			if(target > nums[mid]){
				left = mid+1;
			}else if(nums[mid] < nums[right]){
				right = mid-1;
			}else if(nums[mid] === nums[right]){
                left++;
                right--;
            }else{
				left = mid+1;
			}
		}

	}
	return false;

};
console.log(search([2,5,6,0,0,1,2], 3))
/**
	题目:统计「优美子数组」
	给你一个整数数组 nums 和一个整数 k。

	如果某个 连续 子数组中恰好有 k 个奇数数字，我们就认为这个子数组是「优美子数组」。

	请返回这个数组中「优美子数组」的数目。

	 

	示例 1：

	输入：nums = [1,1,2,1,1], k = 3
	输出：2
	解释：包含 3 个奇数的子数组是 [1,1,2,1] 和 [1,2,1,1] 。
	示例 2：

	输入：nums = [2,4,6], k = 1
	输出：0
	解释：数列中不包含任何奇数，所以不存在优美子数组。
	示例 3：

	输入：nums = [2,2,2,1,2,2,1,2,2,2], k = 2
	输出：16

*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
	let jishu = [], res=0, start=-1;
	for(let i=0;i<nums.length;i++){
		if(nums[i]%2===1){
			jishu.push(i)
		}
	}
	let len = jishu.length;
	for(let i=0;i<=len - k;i++){
		let pre = jishu[i] - start,
			next = i+k >= len?nums.length - jishu[i+k-1]:jishu[i+k] - jishu[i+k-1];
		res += pre*next;
		start = jishu[i];
	}
	return res
};
console.log(numberOfSubarrays([2,4,6], 3))
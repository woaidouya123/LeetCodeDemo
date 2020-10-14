/**
	题目：分割数组为连续子序列
	给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个子序列，其中每个子序列都由连续整数组成且长度至少为 3 。

	如果可以完成上述分割，则返回 true ；否则，返回 false 。

	 

	示例 1：

	输入: [1,2,3,3,4,5]
	输出: True
	解释:
	你可以分割出这样两个连续子序列 : 
	1, 2, 3
	3, 4, 5
	 

	示例 2：

	输入: [1,2,3,3,4,4,5,5]
	输出: True
	解释:
	你可以分割出这样两个连续子序列 : 
	1, 2, 3, 4, 5
	3, 4, 5
	 

	示例 3：

	输入: [1,2,3,4,4,5]
	输出: False
	 

	提示：

	输入的数组长度范围为 [1, 10000]
*/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    let arrs = [], len = nums.length;
    if(len < 3){
        return false;
    }
    for(let i=0;i<len;i++){
        let j=0;
        for(;j<arrs.length;j++){
            if(nums[i] === arrs[j][0]+arrs[j][1]){
                arrs[j][1]++;
                break;
            }
        }
        if(j >= arrs.length){
            arrs.unshift([nums[i],1])
        }
    }
    for(let i=0;i<arrs.length;i++){
        if(arrs[i][1] < 3){
            return false;
        }
    }
    return true;
};
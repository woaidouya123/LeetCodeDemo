/**
	题目：下一个排列
	实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

	如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

	必须原地修改，只允许使用额外常数空间。

	以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
	1,2,3 → 1,3,2
	3,2,1 → 1,2,3
	1,1,5 → 1,5,1
*/
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length, sort=[nums[nums.length-1]], max = nums[nums.length-1];
    for(let i=len-2;i>=0;i--){
        if(nums[i] >= max){
            max = nums[i];
            add(nums[i]);
        }else{
            for(let j=0;j<sort.length;j++){
                if(sort[j] > nums[i]){
                    let temp = nums[i];
                    nums[i] = sort[j];
                    sort.splice(j,1,temp);
                    break;
                }
            }
            for(let j=0;j<sort.length;j++){
                nums[i+j+1] = sort[j];
            }
            return;
        }

    }
    nums.reverse();

    function add(num){
        let i;
        for(i=0;i<sort.length;i++){
            if(num <= sort[i]){
                sort.splice(i,0,num);
                break;
            }
        }
        if(i >= sort.length){
            sort.push(num);
        }
    }
};
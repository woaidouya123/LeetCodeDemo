/**
    题目：缺失的第一个正数
    给定一个未排序的整数数组，找出其中没有出现的最小的正整数。

    示例 1:

    输入: [1,2,0]
    输出: 3
    示例 2:

    输入: [3,4,-1,1]
    输出: 2
    示例 3:

    输入: [7,8,9,11,12]
    输出: 1

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let n=1,len=nums.length,m={},i;
    for(i=0;i<len;i++){
        if(nums[i]>0)m[nums[i]]=1;
    }
    for(i=1;i<=len+1;i++){
        if(!m[i]){
            return i;
        }
    }
    return 1;
};

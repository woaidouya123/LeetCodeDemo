/**
    题目：最接近的三数之和
    给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

    例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

    与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums = nums.sort((a,b)=>a-b);
    let mindis = Infinity,res;
    for(let i=0;i<nums.length-2;i++){
        let start = i+1, end = nums.length-1;
        while(start<end){
            let temp = nums[i]+nums[start]+nums[end];
            if(Math.abs(temp-target)<mindis){
                mindis = Math.abs(temp-target);
                res = temp
            }
            while(temp >= target&&nums[end]==nums[--end]){}
            while(temp < target&&nums[start]==nums[++start]){}
        }
        while(nums[i]==nums[i+1])i++;
    }
    return res;
};
console.log(threeSumClosest([-1,2,1,-4,4,5,8,-5,9,0,1,1,4,-6,-4],5))

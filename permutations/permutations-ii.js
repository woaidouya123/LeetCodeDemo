/**
    题目：全排列 II
    给定一个可包含重复数字的序列，返回所有不重复的全排列。

    示例:

    输入: [1,1,2]
    输出:
    [
    [1,1,2],
    [1,2,1],
    [2,1,1]
    ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a,b)=>a-b);
    let len = nums.length, res=[], item=[];
    function all_sort(){
        if(item.length ==len){
            res.push(item.concat());
        }
        for(let i=0;i<nums.length;i++){
            if(i>0&&nums[i-1]===nums[i]){
                continue;
            }
            let n = nums.splice(i,1)[0];
            item.unshift(n);
            all_sort();
            nums.splice(i,0,item.shift());
        }
    }
    all_sort();
    return res;
};

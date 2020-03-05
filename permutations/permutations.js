/**
    题目：全排列
    给定一个没有重复数字的序列，返回其所有可能的全排列。

    示例:

    输入: [1,2,3]
    输出:
    [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let len = nums.length, res=[], item=[];
    function all_sort(){
        if(item.length ==len){
            res.push(item.concat());
        }
        for(let i=0;i<nums.length;i++){
            let n = nums.splice(i,1)[0];
            item.unshift(n);
            all_sort();
            nums.splice(i,0,item.shift());
        }
    }
    all_sort();
    return res;
};

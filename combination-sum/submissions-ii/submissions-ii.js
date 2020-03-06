/**
    题目：组合总和 II
    给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

    candidates 中的每个数字在每个组合中只能使用一次。

    说明：

    所有数字（包括目标数）都是正整数。
    解集不能包含重复的组合。 
    示例 1:

    输入: candidates = [10,1,2,7,6,1,5], target = 8,
    所求解集为:
    [
    [1, 7],
    [1, 2, 5],
    [2, 6],
    [1, 1, 6]
    ]
    示例 2:

    输入: candidates = [2,5,2,1,2], target = 5,
    所求解集为:
    [
      [1,2,2],
      [5]
    ]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    let i=0,len = candidates.length, res=[],temp=[];
    while(i<len&&candidates[i] <= target)i++;

    function add(index,sum){
        temp.unshift(candidates[index]);
        if(sum + candidates[index] === target){
            res.push(temp.concat());
        }else if(sum + candidates[index] <= target){
            for(let j=index-1;j>=0;j--){
                add(j,sum+candidates[index]);
                while(candidates[j]===candidates[j-1])j--;
            }
        }
        temp.shift();
    }
    for(let k=i-1;k>=0;k--){
        temp = [];
        add(k,0,k);
        while(candidates[k]===candidates[k-1])k--;
    }
    return res;
};

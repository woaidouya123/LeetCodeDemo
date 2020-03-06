/**
    题目：组合总和
    给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。

    candidates 中的数字可以无限制重复被选取。

    说明：

    所有数字（包括 target）都是正整数。
    解集不能包含重复的组合。 
    示例 1:

    输入: candidates = [2,3,6,7], target = 7,
    所求解集为:
    [
    [7],
    [2,2,3]
    ]
    示例 2:

    输入: candidates = [2,3,5], target = 8,
    所求解集为:
    [
      [2,2,2,2],
      [2,3,3],
      [3,5]
    ]
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    let i=0,len = candidates.length, res=[],temp=[];
    while(i<len&&candidates[i] <= target)i++;

    function add(index,sum){
        temp.unshift(candidates[index]);
        if(sum + candidates[index] === target){
            res.push(temp.concat());
        }else if(sum + candidates[index] <= target){
            for(let j=index;j>=0;j--){
                add(j,sum+candidates[index]);
            }
        }
        temp.shift();
    }
    for(let k=0;k<i;k++){
        temp = [];
        add(k,0,k);
    }
    return res;

};

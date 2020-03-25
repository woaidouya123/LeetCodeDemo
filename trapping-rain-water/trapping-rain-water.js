/**
	题目：接雨水
	给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
	上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水。

	示例:

	输入: [0,1,0,2,1,0,1,3,2,1,2,1]
	输出: 6
*/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length, left = [0],right=[0],res=0;
    for(let i=1;i<len;i++){
    	left.push(Math.max(left[i-1],height[i-1]));
    }
    for(let i=1;i<len;i++){
    	right.unshift(Math.max(right[0],height[len-i]));
    }
    for(let i=0;i<len;i++){
    	res+=Math.max(Math.min(left[i],right[i])-height[i],0);
    }
    return res;
};
console.log(trap(
[0,1,0,2,1,0,1,3,2]));
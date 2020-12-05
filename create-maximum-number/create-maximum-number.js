/**
题目:拼接最大数
给定长度分别为 m 和 n 的两个数组，其元素由 0-9 构成，表示两个自然数各位上的数字。现在从这两个数组中选出 k (k <= m + n) 个数字拼接成一个新的数，要求从同一个数组中取出的数字保持其在原数组中的相对顺序。

求满足该条件的最大数。结果返回一个表示该最大数的长度为 k 的数组。

说明: 请尽可能地优化你算法的时间和空间复杂度。

示例 1:

输入:
nums1 = [3, 4, 6, 5]
nums2 = [9, 1, 2, 5, 8, 3]
k = 5
输出:
[9, 8, 6, 5, 3]
示例 2:

输入:
nums1 = [6, 7]
nums2 = [6, 0, 4]
k = 5
输出:
[6, 7, 6, 0, 4]
示例 3:

输入:
nums1 = [3, 9]
nums2 = [8, 9]
k = 3
输出:
[9, 8, 9]

*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber = function(nums1, nums2, k) {
    let len1 = nums1.length, len2 = nums2.length, count = k, res = [];
    let dp1 = new Array(len1).fill(0).map(v=>new Array(len1)), dp2 = new Array(len2).fill(0).map(v=>new Array(len2));
    for(let i=0;i<len1;i++){
    	dp1[i][i] = i;
    	for(let j=i+1;j<len1;j++){
    		if(nums1[j] > nums1[dp1[i][j-1]]){
    			dp1[i][j] = j;
    		}else{
    			dp1[i][j] = dp1[i][j-1];
    		}
    	}
    }

    for(let i=0;i<len2;i++){
    	dp2[i][i] = i;
    	for(let j=i+1;j<len2;j++){
    		if(nums2[j] > nums2[dp2[i][j-1]]){
    			dp2[i][j] = j;
    		}else{
    			dp2[i][j] = dp2[i][j-1];
    		}
    	}
    }
    console.log(dp1,dp2)
    let index1 = 0, index2 = 0;
    while(count > 0 && index1 < len1 && index2 < len2){
    	console.log(index1,index2,count,res)
    	let max1 = max2 = 0;
    	if(len1 - index1 >= count){
    		max2 = dp2[index2][len2-1];
    	}else{
    		max2 = dp2[index2][len2-(count-len1+index1)];
    	}
    	if(len2 - index2 >= count){
    		max1 = dp1[index1][len1-1];
    	}else{
    		max1 = dp1[index1][len1-(count-len2+index2)];
    	}
    	if(nums1[max1] > nums2[max2]){
    		res.push(nums1[max1]);
    		index1 = max1+1;
    	}else if(nums1[max1] > nums2[max2]){
    		res.push(nums2[max2]);
    		index2 = max2+1;
    	}else{
    		if(nums1[dp1[index][len1-1]] > nums2[dp2[max2][len2-1]]){
    			res.push(nums1[max1]);
    			index1 = max1+1;
    		}else{
    			res.push(nums2[max2]);
    			index2 = max2+1;
    		}
    	}
    	count--;

    }
    while(count > 0 && index1 < len1){
    	let max = dp1[index1][len1-count];
    	res.push(nums1[max]);
    	index1 = max+1;
    	count--;
    }
    while(count > 0 && index2 < len2){
    	let max = dp2[index2][len2-count];
    	res.push(nums2[max]);
    	index2 = max+1;
    	count--;
    }
    return res;

};
console.log(maxNumber([3,9],[8,9],3))
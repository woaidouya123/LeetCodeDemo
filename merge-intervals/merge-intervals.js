/**
	题目：合并区间
	给出一个区间的集合，请合并所有重叠的区间。

	示例 1:

	输入: [[1,3],[2,6],[8,10],[15,18]]
	输出: [[1,6],[8,10],[15,18]]
	解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
	示例 2:

	输入: [[1,4],[4,5]]
	输出: [[1,5]]
	解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b)=>(a[0]-b[0] || a[1]-b[1]));
    if(intervals.length <= 0)return intervals;
    let cur = intervals[0][1];
    for(let i=1;i<intervals.length;i++){
        if(intervals[i][0] <= cur){
            cur = Math.max(cur, intervals[i][1])
            intervals[i-1][1] = cur;
            intervals.splice(i,1);
            i--;
        }else{
            cur = intervals[i][1];
        }
    }
    return intervals;
    
};
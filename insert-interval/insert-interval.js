/**
题目：插入区间
给出一个无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。

*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let start = newInterval[0], end = newInterval[1], len = intervals.length, res = [];
    if(len <= 0 || end < intervals[0][0]){
        return [newInterval].concat(intervals);
    }
    let i=0;
    for(;i<len;i++){
        if(intervals[i][0] > end){
            res.push([start, end]);
            res.push(intervals[i]);
            break;
        }
        if(intervals[i][0] === end){
            end = Math.max(end, intervals[i][1]);
            res.push([start, end]);
            break;
        }
        if(intervals[i][0] < end){
            if(intervals[i][1] < start){
                res.push(intervals[i])
            }else{
                end = Math.max(end, intervals[i][1]);
                start = Math.min(start, intervals[i][0]);
            }
            if(i===len-1){
                res.push([start, end]);
            }
        }
    }
    return res.concat(intervals.slice(i+1));
};
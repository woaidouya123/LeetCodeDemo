/**
题目：最接近原点的 K 个点
我们有一个由平面上的点组成的列表 points。需要从中找出 K 个距离原点 (0, 0) 最近的点。

（这里，平面上两点之间的距离是欧几里德距离。）

你可以按任何顺序返回答案。除了点坐标的顺序之外，答案确保是唯一的。

 

示例 1：

输入：points = [[1,3],[-2,2]], K = 1
输出：[[-2,2]]
解释： 
(1, 3) 和原点之间的距离为 sqrt(10)，
(-2, 2) 和原点之间的距离为 sqrt(8)，
由于 sqrt(8) < sqrt(10)，(-2, 2) 离原点更近。
我们只需要距离原点最近的 K = 1 个点，所以答案就是 [[-2,2]]。
示例 2：

输入：points = [[3,3],[5,-1],[-2,4]], K = 2
输出：[[3,3],[-2,4]]
（答案 [[-2,4],[3,3]] 也会被接受。）
 

提示：

1 <= K <= points.length <= 10000
-10000 < points[i][0] < 10000
-10000 < points[i][1] < 10000
*/
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function(points, K) {
	let len = points.length, arr = [], values = [];
	for(let i=0;i<len;i++){
		let temp = (points[i][0]**2 + points[i][1]**2);
		if(arr.length >= K && temp < values[K-1] ){
			for(let j=0;j<arr.length;j++){
				if(temp < values[j]){
					arr.splice(j,0,points[i]);
					values.splice(j,0,temp);
					break;
				}
			}
		}else if(arr.length < K){
			let j = 0;
			for(;j<arr.length;j++){
				if(temp < values[j]){
					arr.splice(j,0,points[i]);
					values.splice(j,0,temp);
					break;
				}
			}
			if(j === arr.length){
				arr.push(points[i]);
				values.push(temp);
			}
		}
	}
	return arr.slice(0,K);
};
console.log(kClosest([[6,10],[-3,3],[-2,5],[0,2]],3))
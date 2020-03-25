/**
	题目：三维形体的表面积
	在 N * N 的网格上，我们放置一些 1 * 1 * 1  的立方体。

	每个值 v = grid[i][j] 表示 v 个正方体叠放在对应单元格 (i, j) 上。

	请你返回最终形体的表面积。

	 

	示例 1：

	输入：[[2]]
	输出：10
	示例 2：

	输入：[[1,2],[3,4]]
	输出：34
	示例 3：

	输入：[[1,0],[0,2]]
	输出：16
	示例 4：

	输入：[[1,1,1],[1,0,1],[1,1,1]]
	输出：32
	示例 5：

	输入：[[2,2,2],[2,1,2],[2,2,2]]
	输出：46
	 

	提示：

	1 <= N <= 50
	0 <= grid[i][j] <= 50
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
	let len = grid.length, res = 0;
	function getSurfaceArea(x,y){
		let count = grid[x][y]*6-2*(grid[x][y]-1);
		let border = [];
		x>=1&&(border.push([x-1,y]));
		x<len-1&&(border.push([x+1,y]));
		y>=1&&(border.push([x,y-1]));
		y<len-1&&(border.push([x,y+1]));
		for(let pos of border){
			count -= Math.min(grid[x][y],grid[pos[0]][pos[1]]);
		}
		return count;
	}
	for(let i=0;i<len;i++){
		for(let j=0;j<len;j++){
			if(grid[i][j]===0)continue;
			let temp = getSurfaceArea(i,j);
			res+=temp;
		}
	}
	return res;
};
console.log(surfaceArea(
	[[2,2,2],[2,1,2],[2,2,2]]
	))
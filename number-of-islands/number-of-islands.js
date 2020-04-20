/**
	题目：岛屿数量
	给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

	岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

	此外，你可以假设该网格的四条边均被水包围。

	示例 1:

	输入:
	11110
	11010
	11000
	00000
	输出: 1
	示例 2:

	输入:
	11000
	11000
	00100
	00011
	输出: 3
	解释: 每座岛屿只能由水平和/或竖直方向上相邻的陆地连接而成。

*/
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	let res = 0, len1 = grid.length;
	if(len1 <= 0)return res;
	let len2 = grid[0].length;
	for(let i=0;i<len1;i++){
		for(let j=0;j<len2;j++){
			if(grid[i][j] === '0' || grid[i][j] === '2')continue;
			grid[i][j] = '2';
			res++;
			render(i, j);
		}
	}

	function render(i, j){
		[[i-1,j],[i+1,j],[i,j-1],[i,j+1]].forEach(pos=>{
			if(pos[0]>=0&&pos[0]<len1&&pos[1]>=0&&pos[1]<len2){
				if(grid[pos[0]][pos[1]] === '1'){
					grid[pos[0]][pos[1]] = '2';
					render(pos[0], pos[1]);
				}
			}
		})
	}
	return res;
};
console.log(numIslands(
[]
	))
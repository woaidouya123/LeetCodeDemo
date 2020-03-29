/**
	题目：地图分析
	你现在手里有一份大小为 N x N 的『地图』（网格） grid，上面的每个『区域』（单元格）都用 0 和 1 标记好了。其中 0 代表海洋，1 代表陆地，你知道距离陆地区域最远的海洋区域是是哪一个吗？请返回该海洋区域到离它最近的陆地区域的距离。

	我们这里说的距离是『曼哈顿距离』（ Manhattan Distance）：(x0, y0) 和 (x1, y1) 这两个区域之间的距离是 |x0 - x1| + |y0 - y1| 。

	如果我们的地图上只有陆地或者海洋，请返回 -1。
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function(grid) {
    let len = grid.length,m=[],res = -1;
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(grid[i][j] === 0){
                m.push([i,j,len*2]);
            }
        }
    }
    for(let i=0;i<len;i++){
        for(let j=0;j<len;j++){
            if(grid[i][j] === 1){
                for(let k=0;k<m.length;k++){
                    let t = Math.abs(i-m[k][0])+Math.abs(j-m[k][1]);
                    if(m[k][2] > t){
                        m[k][2] = t;
                    }
                }
            }
        }
    }
    for(let i=0;i<m.length;i++){
        res = Math.max(m[i][2],res);
    }
    return res===len*2?-1:res;
};
/**
题目：N 皇后
n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。



上图为 8 皇后问题的一种解法。

给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 
*/
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [], col = [];
    let dfs = function(deep){
        if(deep >= n){
            let arr = new Array(n).fill(false).map(v=>new Array(n).fill('.').join(''))
            col.forEach((v,i)=>{
                arr[i] = arr[i].substring(0,v)+'Q'+arr[i].substring(v+1)
            })
            res.push(arr);
            return;
        }
        for(let i=0;i<n;i++){
            let j = 0;
            for(;j<col.length;j++){
                if(col[j] === i || deep - i === j - col[j] || deep + i === j + col[j]){
                    break;
                }
            }
            if(j >= col.length){
                col.push(i);
                dfs(deep+1);
                col.pop();
            }
        }
    }
    dfs(0);
    return res;
};
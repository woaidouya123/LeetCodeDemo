/**
    题目：
    假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

    注意：给定 n 是一个正整数。
*/
/**
 * 采用动态规划的思路：
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var save=new Array(n+1),i;
    function step(rest){
        if(save[rest] != null){
            return save[rest];
        }
        if(rest <= 1){
            return 1;
        }
        return step(rest-1) + step(rest-2);
    }
    for(i=1;i<=n;i++){
        save[i] = step(i);
    }
    return save[n];
};
console.log(climbStairs(50))

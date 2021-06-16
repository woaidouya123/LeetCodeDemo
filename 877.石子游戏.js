/*
 * @lc app=leetcode.cn id=877 lang=javascript
 *
 * [877] 石子游戏
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function(piles) {
    let len = piles.length, dp = new Array(len).fill(0).map(v => new Array(len).fill(0));
    for(let i=0;i<len;i++){
        dp[i][i] = piles[i];
    }
    for(let j=1; j<len;j++){
        for(let i=0; i<len-j;i++){
            dp[i][i+j] = Math.max(piles[i] - dp[i+1][i+j], piles[i+j] - dp[i][i+j-1] )
        }
    }
    return dp[0][len-1] > 0;
};
// @lc code=end


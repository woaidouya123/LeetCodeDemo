/**
 * 题目：
    给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

    如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。

    注意你不能在买入股票前卖出股票。

    输入: [7,1,5,3,6,4]
    输出: 5
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
        注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var min = prices[0] || 0,maxp = prices[1] - prices[0] || 0, i;
    for(i=1;i<prices.length;i++){
        min = Math.min(min,prices[i]);
        maxp = Math.max(maxp, prices[i] - min);
    }
    return maxp;
};
console.log(maxProfit([2,5,1,5,5,6,4]))

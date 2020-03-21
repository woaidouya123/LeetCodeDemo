/**
	题目： 水壶问题
	有两个容量分别为 x升 和 y升 的水壶以及无限多的水。请判断能否通过使用这两个水壶，从而可以得到恰好 z升 的水？

	如果可以，最后请用以上水壶中的一或两个来盛放取得的 z升 水。

	你允许：

	装满任意一个水壶
	清空任意一个水壶
	从一个水壶向另外一个水壶倒水，直到装满或者倒空
	示例 1: (From the famous "Die Hard" example)

	输入: x = 3, y = 5, z = 4
	输出: True
	示例 2:

	输入: x = 2, y = 6, z = 5
	输出: False
*/
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
// var canMeasureWater = function(x, y, z) {
//     let l1 = l2 = 0, m={};
//     function pull(l1, l2){
//         console.log(l1,l2);
//         if(l1 === z || l2 === z || l1+l2 ===z)return true;
//         if(m[l1]){
//             if(m[l1].indexOf(l2) > -1)return false;
//             else m[l1].push(l2);
//         }else{
//             m[l1] = [l2];
//         }
//         return pull(0,l2) || pull(l1,0) || pull(x,l2) || pull(l1,y) || (l1+l2>y?pull(l1+l2-y,y):pull(0,l1+l2)) || (l1+l2>x?pull(x,l1+l2-x):pull(l1+l2,0));
//     }
//     return pull(l1,l2);
// };
var canMeasureWater = function(x, y, z) {
    let min = Math.min(x,y),i;
    for(i=min;i>0;i--){
        if(x%i===0&&y%i===0)break;
    }
    return z===0||x+y>=z&&z%i===0;
};
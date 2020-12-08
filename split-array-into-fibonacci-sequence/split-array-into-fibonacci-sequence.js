/**
题目：将数组拆分成斐波那契序列
给定一个数字字符串 S，比如 S = "123456579"，我们可以将它分成斐波那契式的序列 [123, 456, 579]。

形式上，斐波那契式序列是一个非负整数列表 F，且满足：

0 <= F[i] <= 2^31 - 1，（也就是说，每个整数都符合 32 位有符号整数类型）；
F.length >= 3；
对于所有的0 <= i < F.length - 2，都有 F[i] + F[i+1] = F[i+2] 成立。
另外，请注意，将字符串拆分成小块时，每个块的数字一定不要以零开头，除非这个块是数字 0 本身。

返回从 S 拆分出来的任意一组斐波那契式的序列块，如果不能拆分则返回 []。

 

示例 1：

输入："123456579"
输出：[123,456,579]
示例 2：

输入: "11235813"
输出: [1,1,2,3,5,8,13]
示例 3：

输入: "112358130"
输出: []
解释: 这项任务无法完成。
示例 4：

输入："0123"
输出：[]
解释：每个块的数字不能以零开头，因此 "01"，"2"，"3" 不是有效答案。
示例 5：

输入: "1101111"
输出: [110, 1, 111]
解释: 输出 [11,0,11,11] 也同样被接受。
 

提示：

1 <= S.length <= 200
字符串 S 中只含有数字。

*/
/**
 * @param {string} S
 * @return {number[]}
 */
// var splitIntoFibonacci = function(S) {
//     let len =  S.length, res = [], temp = [];
//     let dfs = function(index){
//         if(index >= len){
//             temp = [].concat(res);
//             return;
//         }
//         let l = res.length, num = +S[index],end = index;
//         while((index < len-1)&&S[index]!=0&&(num < res[l-1]+res[l-2])){
//             end++;
//             num = +S[end]+num*10;
//         }
//         if(index < len && num === +res[l-1]+res[l-2]){
//             res.push(+S.slice(index, end+1));
//             dfs(end+1);
//         }
//     }
//     for(let i=1;i<len-1;i++){
//         for(let j=i+1;j<len;j++){
//             let t1 = S.slice(0,i), t2 = S.slice(i,j);
//             if(t1[0] == 0&&t1.length > 1 || t2[0] == 0 && t2.length > 1)continue;
//             res.push(+t1,+t2);
//             dfs(j);
//             if(temp.length > 0)return temp;
//             res = [];
//         }
//     }
//     return [];
// };
var splitIntoFibonacci = function(S) {
    const list = new Array().fill(0);
    backtrack(list, S, S.length, 0, 0, 0);
    return list;
};

const backtrack = (list, S, length, index, sum, prev) => {
    if (index === length) {
        return list.length >= 3;
    }
    let currLong = 0;
    for (let i = index; i < length; i++) {
        if (i > index && S[index] === '0') {
            break;
        }
        currLong = currLong * 10 + S[i].charCodeAt() - '0'.charCodeAt();
        if (currLong > Math.pow(2, 31) - 1) {
            break;
        }
        let curr = currLong;
        if (list.length >= 2) {
            if (curr < sum) {
                continue;
            } else if (curr > sum) {
                break;
            }
        }
        list.push(curr);
        if (backtrack(list, S, length, i + 1, prev + curr, curr)) {
            return true;
        } else {
            list.splice(list.length - 1, 1);
        }
    }
    return false;
}
/**
    题目：
    给定一组唯一的单词， 找出所有不同 的索引对(i, j)，使得列表中的两个单词， words[i] + words[j] ，可拼接成回文串。

    示例 1:

    输入: ["abcd","dcba","lls","s","sssll"]
    输出: [[0,1],[1,0],[3,2],[2,4]]
    解释: 可拼接成的回文串为 ["dcbaabcd","abcddcba","slls","llssssll"]
    示例 2:

    输入: ["bat","tab","cat"]
    输出: [[0,1],[1,0]]
    解释: 可拼接成的回文串为 ["battab","tabbat"]
 */
/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
    let res = [];
    function judge(str){
        let i=0,j=str.length-1;
        while(i <= j){
            if(str[i] !== str[j]){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
    for(let i=0;i<words.length;i++){
        for(let j=0;j<words.length;j++){
            if(i === j)continue;
            if(judge(words[i]+words[j])){
                res.push([i,j])
            }
        }
    }
    return res;
};
console.log(palindromePairs(["bat","tab","cat"]))

/**
题目：重构字符串
给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。

若可行，输出任意可行的结果。若不可行，返回空字符串。

示例 1:

输入: S = "aab"
输出: "aba"
示例 2:

输入: S = "aaab"
输出: ""
注意:

S 只包含小写字母并且长度在[1, 500]区间内。
*/
/**
 * @param {string} S
 * @return {string}
 */
var reorganizeString = function(S) {
    let m = new Array(26).fill(0), len = S.length, res = "", max = 0, m_index = -1;
    for(let i=0;i<len;i++){
        m[S.charCodeAt(i)-97]++;
    }
    for(let i=0;i<26;i++){
        if(m[i] > max){
            max = m[i];
            m_index = i;
        }
    }
    let sum = len - max;
    let s = [];
    for(let i=0;i<26;i++){
        if(i===m_index)continue;
        s+=String.fromCharCode(97+i).repeat(m[i]);
    }
    if(sum < max-1){
        return "";
    }else{
        res = String.fromCharCode(97+m_index).repeat(max);
        let count = s.length,i=1;
        while(count > 0){
            res = res.substr(0,i)+s[sum-count]+res.substr(i);
            i = (i+2)%res.length;
            count--;
        }
    }
    return res;
    
};
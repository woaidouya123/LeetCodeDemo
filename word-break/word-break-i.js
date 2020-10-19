/**
题目：单词拆分
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false
*/
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let len = s.length, m = new Array(len).fill(false), wlen = wordDict.length;
    for(let i=0;i<wlen;i++){
        if(s.substr(0,wordDict[i].length) === wordDict[i]){
            m[wordDict[i].length-1] = true;
        }
    }
    for(let i=1;i<len;i++){
        if(!m[i-1])continue;
        for(let j=0;j<wlen;j++){
            if(s.substr(i,wordDict[j].length) === wordDict[j]){
                m[i+wordDict[j].length-1] = true;
            }
        }
    }
    console.log(m,len);
    return m[len -1];
};
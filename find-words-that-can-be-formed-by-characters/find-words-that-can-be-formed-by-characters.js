/**
	题目：拼写单词
	给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

	假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

	注意：每次拼写时，chars 中的每个字母都只能用一次。

	返回词汇表 words 中你掌握的所有单词的 长度之和。

	 

	示例 1：

	输入：words = ["cat","bt","hat","tree"], chars = "atach"
	输出：6
	解释： 
	可以形成字符串 "cat" 和 "hat"，所以答案是 3 + 3 = 6。
	示例 2：

	输入：words = ["hello","world","leetcode"], chars = "welldonehoneyr"
	输出：10
	解释：
	可以形成字符串 "hello" 和 "world"，所以答案是 5 + 5 = 10。
*/
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let clen = chars.length, wlen = words.length, m={},res=0;
    for(let i=0;i<clen;i++){
        if(m[chars[i]]){
            m[chars[i]]++;
        }else{
             m[chars[i]]=1;
        }
    }
    for(let i=0;i<wlen;i++){
        if(judge(words[i],0)){
            res+=words[i].length;
        }
    }

    function judge(str,index){
        let value;
        if(index >= str.length)return true;
        if(m[str[index]]!=null&&m[str[index]]>0){
            m[str[index]]--;
            value = judge(str,index+1);
            m[str[index]]++;
            return value;
        }else return false;
    }

    return res;
};
/**
	题目：串联所有单词的子串
	给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。

	注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。

	 

	示例 1：

	输入：
	  s = "barfoothefoobarman",
	  words = ["foo","bar"]
	输出：[0,9]
	解释：
	从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
	输出的顺序不重要, [9,0] 也是有效答案。
	示例 2：

	输入：
	  s = "wordgoodgoodgoodbestword",
	  words = ["word","good","best","word"]
	输出：[]
*/
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let res = [], m = {}, slen = s.length, wCount = words.length;
    if(wCount === 0){
        return res;
    }
    let wlen = words[0].length;
    for(let i=0;i<words.length;i++){
    	if(m[words[i]])m[words[i]]++;
    	else m[words[i]] = 1;
    }
    function parse(s){
    	if(s.length <= 0)return true;
    	if(m[s.substr(0,wlen)]){
    		m[s.substr(0,wlen)]--;
    		let res = parse(s.substr(wlen));
    		m[s.substr(0,wlen)]++;
    		return res;
    	}else{
    		return false;
    	}
    }
    for(let i=0;i<=slen-wlen*wCount;i++){
    	if(parse(s.substr(i,wlen*wCount)))res.push(i)
    }
    return res;
};
console.log(findSubstring("wordgoodgoodgoodbestword",["word","good","best","word"]));
/**
	题目：单词的压缩编码
	给定一个单词列表，我们将这个列表编码成一个索引字符串 S 与一个索引列表 A。

	例如，如果这个列表是 ["time", "me", "bell"]，我们就可以将其表示为 S = "time#bell#" 和 indexes = [0, 2, 5]。

	对于每一个索引，我们可以通过从字符串 S 中索引的位置开始读取字符串，直到 "#" 结束，来恢复我们之前的单词列表。

	那么成功对给定单词列表进行编码的最小字符串长度是多少呢？

	 

	示例：

	输入: words = ["time", "me", "bell"]
	输出: 10
	说明: S = "time#bell#" ， indexes = [0, 2, 5] 。
	 

	提示：

	1 <= words.length <= 2000
	1 <= words[i].length <= 7
	每个单词都是小写字母 。
*/
/**
 * @param {string[]} words
 * @return {number}
 */
var minimumLengthEncoding = function (words) {
    let hashSet = new Set(words);
    for (let item of hashSet) {
        for (let i = 1; i < item.length; i++) {
            // 切片，看看是否词尾在 hashSet 中，切片从1开始，只看每个单词的词尾
            let target = item.slice(i);
            hashSet.has(target) && hashSet.delete(target);
        }
    }
    let result = 0;
    // 根据 hashSet 中剩余元素计算最终长度
    hashSet.forEach(item => result += item.length + 1)
    return result
};
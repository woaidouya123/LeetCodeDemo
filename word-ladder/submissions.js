/**
题目：单词接龙
给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord 的最短转换序列的长度。转换需遵循如下规则：

每次转换只能改变一个字母。
转换过程中的中间单词必须是字典中的单词。
说明:

如果不存在这样的转换序列，返回 0。
所有单词具有相同的长度。
所有单词只由小写字母组成。
字典中不存在重复的单词。
你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出: 5

解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
     返回它的长度 5。
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: 0

解释: endWord "cog" 不在字典中，所以无法进行转换。
*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

const ladderLength = (beginWord, endWord, wordList) => {
  const wordSet = new Set(wordList);
  const queue = [];
  queue.push([beginWord, 1]);

  while (queue.length) {
    const [word, level] = queue.shift();  // 当前出列的单词
    if (word == endWord) {
      return level;
    }
    for (let i = 0; i < word.length; i++) { // 遍历当前单词的所有字符
      for (let c = 97; c <= 122; c++) { // 对应26个字母
        const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1); // 形成新词
        if (wordSet.has(newWord)) { // 单词表里有这个新词
          queue.push([newWord, level + 1]); // 作为下一层的词入列
          wordSet.delete(newWord);  // 避免该词重复入列
        }
      }
    }
  }
  return 0; // bfs结束，始终没有遇到终点
};
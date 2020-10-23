/**
题目： 回文链表
请判断一个链表是否为回文链表。

示例 1:

输入: 1->2
输出: false
示例 2:

输入: 1->2->2->1
输出: true
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let s = [], node = head;
    while(node){
        s.push(node.val);
        node = node.next;
    }
    let len = s.length, i = 0;
    for(;i<len/2;i++){
        if(s[i] != s[len-i-1])break;
    }
    return i >= len/2;
};
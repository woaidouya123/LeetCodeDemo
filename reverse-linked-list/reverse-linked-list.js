/**
    题目：反转链表
    反转一个单链表。

    示例:

    输入: 1->2->3->4->5->NULL
    输出: 5->4->3->2->1->NULL
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    let last;
    function reverse(pre,node){
        if(node == null || node.next == null){
            last = node;
        }else{
            reverse(node,node.next);
        }
        node&&(node.next = pre);
    }
    reverse(null,head);
    return last;
};

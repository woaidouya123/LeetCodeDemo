/**
    题目：删除链表的倒数第N个节点
    给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

    示例：

    给定一个链表: 1->2->3->4->5, 和 n = 2.

    当删除了倒数第二个节点后，链表变为 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    function deleteIt(node,index){
        let lastIndex;
        if(node.next == null){
            lastIndex = 1;
        }else{
            lastIndex = deleteIt(node.next,index+1)+1;
        }
        if(lastIndex === n+1){
            node.next = node.next.next;
        }
        if(index === 1 && lastIndex === n){
            if(lastIndex === 1){
                head = null;
            }else{
                head = node.next;
            }
        }
        return lastIndex;
    }
    deleteIt(head,1);
    return head;
};

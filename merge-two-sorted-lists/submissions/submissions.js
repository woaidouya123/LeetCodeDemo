/**
    题目：合并两个有序链表
    将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

    示例：

    输入：1->2->4, 1->3->4
    输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode();
    node = head;
    while(l1&&l2){
        node.next = new ListNode();
        node = node.next;
        if(l1.val <= l2.val){
            node.val = l1.val;
            l1 = l1.next;
        }else{
            node.val = l2.val;
            l2 = l2.next;
        }
    }
    if(l1){
        node.next = l1;
    }else{
        node.next = l2;
    }
    return head.next;
};

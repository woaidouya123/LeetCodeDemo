/**
题目：分隔链表
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

 

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let node = head, list1 = new ListNode(), list2 = new ListNode();
    let l1 = list1, l2 = list2;
    while(node){
        if(node.val < x){
            l1.next = node;
            l1 = l1.next;
        }else{
            l2.next = node;
            l2 = l2.next;
        }
        node = node.next;
    }
    l2.next = null;
    l1.next = list2.next;
    return list1.next;
};
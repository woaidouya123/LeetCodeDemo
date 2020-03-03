/**
    题目：两两交换链表中的节点
    给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

    你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

     

    示例:

    给定 1->2->3->4, 你应该返回 2->1->4->3.
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
var swapPairs = function(head) {
    let i=1,j=0,new_head = pre = prepre = node = head,dash;
    while(node != null){
        if(Math.floor(i/2) > j){
            j++;
            if(j == 1){
                new_head = node;
            }else{
                prepre.next = node;
            }
            dash = node;
            node = node.next;
            dash.next = null;
            reverse(node,pre);
            prepre=pre;
            pre = node;

        }else{
            node = node.next;
        }
        i++;
    }
    function reverse(pre, node){
        if(node.next == null){
            node.next = pre;
            return;
        }
        reverse(node,node.next);
        node.next = pre;
    }
    return new_head;
};

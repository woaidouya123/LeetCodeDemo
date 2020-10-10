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
var detectCycle = function(head) {
    let m = {}, node = head;
    while(node){
        if(node.val in m){
            if(m[node.val].filter(item=>item.next === node.next).length > 0){
                return node;
            }else{
                m[node.val].push(node);
            }
        }else{
            m[node.val] = [node]
        }
        node = node.next;
    }
    return node;
};
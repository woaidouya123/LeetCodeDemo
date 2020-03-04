/**
    题目：合并K个排序链表
    合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

    示例:

    输入:
    [
      1->4->5,
      1->3->4,
      2->6
    ]
    输出: 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let len = lists.length, head = new ListNode();
    let node = head;
    while(true){
        let min = Infinity,index = -1;
        for(let i=0;i<lists.length;i++){
            if(lists[i] == null)continue;
            if(lists[i].val < min){
                min = lists[i].val;
                index = i;
            }
        }
        if(index == -1)break;
        node.next = lists[index];
        node = node.next;
        lists[index] = lists[index].next;

    }
    return head.next;
};

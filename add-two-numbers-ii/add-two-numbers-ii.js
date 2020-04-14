/**
	题目：两数相加 II
	给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

	你可以假设除了数字 0 之外，这两个数字都不会以零开头。

	 

	进阶：

	如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。

	 

	示例：

	输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
	输出：7 -> 8 -> 0 -> 7

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
var addTwoNumbers = function(l1, l2) {
    // 链表翻转
    function reverse(pre, next){
        if(next){
            let head = reverse(next,next.next);
            next.next = pre;
            return head;
        }else{
            return pre;
        }
    }
    let h1 = reverse(null,l1), h2 = reverse(null,l2);
    let pre = res = new ListNode(-1),jw = 0,sum;
    function add(a, b){
        // console.log(a.val,b.val);
        if(a&&b){
            sum = a.val + b.val;
            a = a.next;
            b = b.next;
        }else if(a){
            sum = a.val;
            a = a.next;
        }else if(b){
            sum = b.val;
            b = b.next;
        }else{
            if(jw){
                res.next = new ListNode(jw);
                res = res.next;
            }
            return;
        }
        res.next = new ListNode((sum+jw)%10);
        res = res.next;
        if(sum+jw >= 10){
            jw = 1;
        }else{
            jw = 0;
        }
        add(a, b)
    }
    
    add(h1,h2);
    return reverse(null, pre.next);
};
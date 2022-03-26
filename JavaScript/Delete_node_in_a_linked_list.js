/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    
    let curr = node
    let curr2 = curr.next
    curr.val = curr2.val
    curr2 = curr2.next
    curr.next = curr2
    
};
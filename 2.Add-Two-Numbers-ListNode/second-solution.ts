// Second Solution
addTwoNumbers = (l1: ListNode | null, l2: ListNode | null): (ListNode | null) => {
	let currentNode = new ListNode();
    let result = currentNode;
	let carry = 0;

	while (l1 || l2 || carry) {
        let l1Digit = l1 ? l1.val : 0;
        let l2Digit = l2 ? l2.val : 0;
		
        let sum = l1Digit + l2Digit + carry;
        carry = Math.floor(sum / 10);
        
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;

		currentNode.next = new ListNode(sum % 10);
		currentNode = currentNode.next;
	}

	return result.next;
}

// Result: https://leetcode.com/problems/add-two-numbers/submissions/1212839432/
// Runtime 113 ms - Beats 60.65% of users with TypeScript
// Memory 57.64MB - Beats 49.02% of users with TypeScript
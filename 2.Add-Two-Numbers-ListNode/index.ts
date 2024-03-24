// Description: https://leetcode.com/problems/add-two-numbers/description/
import { ListNode } from "./definitions";

import SecondSolution from "./second-solution";

const testCases = {
	1: {
		// [2,4,3]
		l1: new ListNode(2, new ListNode(4, new ListNode(3))),
		// [5,6,4]
		l2: new ListNode(5, new ListNode(6, new ListNode(4)))
	},
	2: {
		// [0]
		l1: new ListNode(0),
		// [0]
		l2: new ListNode(0)
	},
	3: {
		// [9,9,9,9,9,9,9]
		l1: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode()))))))),
		// [9,9,9,9]
		l2: new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
	}
};

SecondSolution(testCases[1].l1, testCases[1].l2);
SecondSolution(testCases[2].l1, testCases[2].l2);
SecondSolution(testCases[3].l1, testCases[3].l2);
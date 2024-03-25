import { ListNode } from "./definitions";

// First Solution
export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): (ListNode | null) {
    let l1Value = "";
    let currentL1 = l1;
    while(currentL1) {
        l1Value = currentL1.val + l1Value;
        currentL1 = currentL1.next
    }

    let l2Value = "";
    let currentL2 = l2;
    while(currentL2) {
        l2Value = currentL2.val + l2Value;
        currentL2 = currentL2.next
    }

    let resultDigits = (BigInt(l1Value) + BigInt(l2Value)).toString().split("");

    let currentNodeList: ListNode | null = null;

    for (let i = 0; i < resultDigits.length; i++) {
        var newNodeList = new ListNode(parseInt(resultDigits[i]), currentNodeList);

        currentNodeList = newNodeList;
    }

    return currentNodeList;
};

// Result: https://leetcode.com/problems/add-two-numbers/submissions/1212770526
// Runtime 159ms - Beats 6.33% of users with TypeScript
// Memory 59.76MB -  Beats 6.69% of users with TypeScript
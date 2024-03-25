function longestPalindrome(s: string): string {
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const maxLengthForOddLengthString = largestPalindromeExpandingFromCenter(s, i, i);
        const maxLengthForEvenLengthString = largestPalindromeExpandingFromCenter(s, i, i + 1);

        let maxLength = Math.max(maxLengthForOddLengthString, maxLengthForEvenLengthString);

        if (maxLength > end - start) {
            start = i - Math.floor((maxLength - 1) / 2);
            end = i + Math.floor(maxLength / 2);
        }
    }

    return s.substring(start, end + 1);
};

function largestPalindromeExpandingFromCenter(s: string, left: number, right: number) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        right++;
        left--;
    }

    // Because the result of the loop is like "iterationWeWant + 1"
    // We need to subtract 1 from the difference
    // -1 because the index is zero based.
    return right - left - 1;
}
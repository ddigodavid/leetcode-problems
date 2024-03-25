function lengthOfLongestSubstring(s: string): number {
    var map: Record<string, number> = {};
    var left = 0;
    let right = 0
    var maxLength = 0;

    for (right = 0; right < s.length; right++) {
        let character = s[right];
        map[character] = (map[character] ?? 0) + 1;

        while(map[character] > 1) {
            map[s[left]]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }
    
    return maxLength;
};

console.log("Input: abcabcbb - Expected: 3 - Output: ", lengthOfLongestSubstring("abcabcbb"));
console.log("Input: bbbbb - Expected: 1 - Output: ", lengthOfLongestSubstring("bbbbb"));
console.log("Input: pwwkew - Expected: 3 - Output: ", lengthOfLongestSubstring("pwwkew"));
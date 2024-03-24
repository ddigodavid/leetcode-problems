function twoSum(nums: number[], target: number): number[] {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const otherPair = target - nums[i];
        
        if (map[otherPair] != undefined) {
            return [i, map[otherPair]];
        }

        map[nums[i]] = i;
    }

	return [];
};

twoSum([2,7,1,5], 9);
twoSum([3,2,4], 6);
twoSum([3,3], 6);

// Description: https://leetcode.com/problems/two-sum/description/
// Results: https://leetcode.com/problems/two-sum/submissions/1212753435
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedNums = [
        ...nums1,
        ...nums2
    ].sort((a, b) => a - b);

    const isMedianIndexOdd = mergedNums.length % 2 > 0;
    const medianIndex = mergedNums.length / 2;
    
    if (isMedianIndexOdd) {
        return mergedNums[Math.floor(medianIndex)];
    }

    return (mergedNums[medianIndex] + mergedNums[medianIndex-1]) / 2;
};

findMedianSortedArrays([1,3], [2]);
findMedianSortedArrays([1,2], [3,4]);
findMedianSortedArrays([3], [-2,-1]);
// WEAKEST //


// O(n) time
// O(1) space >> n is the length of the input array

function longestPeak(arr) {
    let longest = 0;
    let i = 1;

    while (i < arr.length - 1) {
        const peak = arr[i - 1] < arr[i] && arr[i + 1] < arr[i];
        if (!peak) {
            i++;
            continue;
        }

        let leftIdx = i - 2;
        while (leftIdx >= 0 && arr[leftIdx] < arr[leftIdx + 1]) {
            leftIdx--;
        }

        let rightIdx = i + 2;
        while (rightIdx < arr.length && arr[rightIdx] < arr[rightIdx - 1]) {
            rightIdx++;
        }

        const current = rightIdx - leftIdx - 1;
        longest = Math.max(longest, current);
        i = rightIdx;
    }

    return longest;
}

console.log(longestPeak([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]))
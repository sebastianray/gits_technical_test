function maxConsecutive(arr) {
    let maxCount = 0;
    let count = 0;
    for (let i in arr) {
        count = arr[i] === 1 ? count + 1 : 0;
        if (count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
};

console.log(maxConsecutive([1,1,0,1,1,1]))
console.log(maxConsecutive([1,0,0,1,0,1,1]))
export const multiplyRandom = (nums) => {
    let toMultiply = nums;
    if(!Array.isArray(nums)) {
        toMultiply = [nums];
    }
    return toMultiply.map(n => n * Math.random());
}
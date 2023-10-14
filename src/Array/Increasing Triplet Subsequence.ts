function increasingTriplet(nums: number[]): boolean {
    let first = Infinity
    let second = Infinity

    for(const num of nums) {
        if(num <= first){
            first = num
        }else if(num <= second) {
            second = num
        }else {
            return true
        }
    }
    return false
};

const nums = [1,2,3,4,5]
const nums2 = [5,4,3,2,1]

console.log(increasingTriplet(nums));
console.log(increasingTriplet(nums2));

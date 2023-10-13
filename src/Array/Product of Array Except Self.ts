function productExceptSelf(nums: number[]): number[] {
   const n = nums.length;

   let rightProducts = new Array(n)
   let leftProducts = new Array(n)
   let result = new Array(n).fill(1)

   let leftProduct = 1;
   for(let i = 0; i < n; i++) {
    leftProducts[i] = leftProduct;
    leftProduct *= nums[i]
   }

   let rightProduct = 1;
   for(let i = n -1; i >= 0; i --){
    rightProducts[i] = rightProduct;
    rightProduct *= nums[i]
   }

   for(let i = 0; i < n; i++) {
    result[i] = leftProducts[i] * rightProducts[i]
   }

   return result;
};

const nums = [1, 2, 3, 4]
const nums2 = [-1, 1, 0, -3, 3]
console.log(productExceptSelf(nums));
console.log(productExceptSelf(nums2));

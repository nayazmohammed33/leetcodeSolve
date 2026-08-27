/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length<2){
        return nums[0];
    }
    let result = new Array(nums.length);

    result[0] =nums[0];
   result[1] = Math.max(nums[0],nums[1]);

    for(let i=2;i<nums.length;i++){
        result[i] = Math.max(result[i-2]+nums[i] , result[i-1])
   }
   return result[nums.length -1 ];
};
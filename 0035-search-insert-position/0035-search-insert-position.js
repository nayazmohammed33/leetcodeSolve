/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let brr=[]
    let res=nums.indexOf(target);
    nums.push(target);
    
    nums.sort((a,b)=>a-b);
   
    let resindex=nums.indexOf(target);
    return resindex;
    
};
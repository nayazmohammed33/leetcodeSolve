/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) { 
     const sets= [new Set(nums1), new Set(nums2), new Set(nums3)];
     const count={}
     for(set of sets){
        for(num of set){
            count[num]= (count[num] || 0)+1;
        }
     }
     return Object.keys(count).filter((num)=>count[num]>=2).map(Number);
    
};
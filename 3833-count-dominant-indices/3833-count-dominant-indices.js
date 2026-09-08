/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndices = function(nums) {
  let res=[]
    for(let i=0;i<nums.length;i++){
        const remaining = nums.slice(i+1)
        if(nums[i] > getAverage(remaining)){
            res.push(nums[i]);
        }
    }

    return res.length-1;
};

function getAverage(arr) {
  if (arr.length === 0) return 0;

  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}
const nums = [1,2,2,3];

var isMonotonic = function(nums) {

  let increasing = true;
    let decreasing = true;

    for (let i = 1; i< nums.length; i++) {
        let prev = nums[i-1]
        let curr = nums[i]
        if (curr < prev) {
            increasing = false;
        }
        if (curr > prev) {
            decreasing = false
        }
    }

    return increasing || decreasing


};

console.log(isMonotonic(nums));
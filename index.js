function hasTargetSum(array, target) {
  const noticedNumbers = {};

  for (const number of array){
    const i = target - number;
    if (i in noticedNumbers) return true;
    noticedNumbers[number] = true;
  }
  return false
}

/* 
 This function will look at every number of the array and check to see if the target is found and if so it will return true.
 Else it will return false.
*/

/* 
  Find if the array has the target.
  tell true if the array has target.
  return false if the target is not found.
*/

/*
  This function will find if the array has the target in it by searching each number of the array.
  If the array does not have the desired target, than it will return false.
  Otherwise it will return true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

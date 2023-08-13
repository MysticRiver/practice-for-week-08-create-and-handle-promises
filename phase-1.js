/*
Write a function called stretch. It should:

return a promise
fulfill the promise after 1 second
print "done stretching" once the promise is fulfilled
*/
function stretch() {
  // Your code here

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching")
      resolve();
    }, 1000)
  })


}
/*
Write a function called runOnTreadmill. It should:  

return a promise
fulfill the promise after 0.5 seconds
print "done running on treadmill" once the promise is fulfilled
*/

function runOnTreadmill() {
  // Your code here

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill")
      resolve();
    }, 500)

  })



}

/*

Write a function called liftWeights. It should:
return a promise
fulfill the promise after 2 seconds
print "done lifting weights" once the promise is fulfilled

*/
function liftWeights() {
  // Your code here

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights")
      resolve();
    }, 2000)
  }
    )


}

function workout() {
  // Your code here

  stretch()
    .then(runOnTreadmill) 
    .then(liftWeights)    
    .then(() => console.log("done working out"))
    .catch((err) => console.log(err))
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working 
    
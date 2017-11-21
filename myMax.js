// Max number in array

function find_max(arr) {
  // set max var to first elem
  let max = arr[0];

  // loop through elements
  for(i = 0; i < arr.length; i++) {
    // compare arr[i] to max
    if(arr[i] > max) {
    // make new max
      max = arr[i];
    }
  }
  console.log(max)
}

find_max([0,9,3,14]) // 14
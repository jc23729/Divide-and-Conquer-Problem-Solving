// Goals
// Describe what a divide and conquer strategy is
// Discuss when it’s possible to use divide and conquer, and when not
// Explain how divide and conquer strategies improve time complexity


// Linear Search
// How is indexOf implemented in JavaScript?

// Loop through your array looking for the desired value
// If you find it, return the index
// If you exhaust the array, return -1
// Time complexity: O(n)


// custom indexOf implementation
function indexOf(arr, val) {

    for (let i = 0; i < arr.length; i++) {
      // if you find the value, return the index
      if (arr[i] === val) return i;
    }
  
    // if you never find the value, return -1
    return -1;
  }
  
  indexOf([4, 8, 15, 16, 23, 42], 15); // 2
  indexOf([4, 8, 15, 16, 23, 42], 42); // 5
  indexOf([4, 8, 15, 16, 23, 42], 100); // -1

//   Binary Search
// If our array is sorted, we can look for values much more quickly!

// Look at the middle value in the array
// If the middle value is the one you’re looking for, congratulations!
// If the middle value is too big, you can eliminate every value to the right!
// If the middle value is too small, you can eliminate every value to the left!
// Among all remaining values, pick the middle one, and repeat.
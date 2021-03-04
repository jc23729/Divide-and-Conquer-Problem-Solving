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

function binarySearch(arr, val) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    // find the middle value
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal < val) {
      // middleVal is too small, look at the right half
      leftIdx = middleIdx + 1;
    } else if (middleVal > val) {
      // middleVal is too large, look at the left half
      rightIdx = middleIdx - 1;
    } else {
      // we found our value!
      return middleIdx;
    }
  }
  
  // left and right pointers crossed, val isn't in arr
  return -1;
}

//1. O(1) : refers to an operation where the value/the element is accessed directly
//O(n) : refers to a (set of) where the element can only be accessed by traversing a set of n elements, like in linear search.
// But what does O(log n) really mean? It may seem difficult to understand but let’s visualize it using a simple example of binary search, while searching for a number in a sorted array which will take the worst-case time complexity:
// n = 16 (no. of elements in the sorted array)

// # Python3 code to implement iterative Binary  
// # Search. 
  
// # It returns location of x in given array arr  
// # if present, else returns -1 

// def binarySearch(arr, l, r, x): 
  
//     while l <= r: 
  
//         mid = l + (r - l) // 2; 
          
//         # Check if x is present at mid 
//         if arr[mid] == x: 
//             return mid 
          // # If x is greater, ignore left half 
          //     elif arr[mid] < x: 
          //        l = mid + 1

          // # If x is smaller, ignore right half 
          // else: 
          //     r = mid - 1

    //       # If we reach here, then the element 
    // # was not present 
    // return -1

//     # Driver Code 
// arr = [ 2, 3, 4, 10, 40 ] 
// x = 10

// # Function call 
// result = binarySearch(arr, 0, len(arr)-1, x) 
  
// if result != -1: 
//     print ("Element is present at index % d" % result) 
// else: 
//     print ("Element is not present in array") 

// countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

// Examples:

countZeroes([1,1,1,1,0,0]) // 2
countZeroes([1,0,0,0,0]) // 4
countZeroes([0,0,0]) // 3
countZeroes([1,1,1,1]) // 0

// sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array



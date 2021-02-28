// Goals
// Describe what a divide and conquer strategy is
// Discuss when it’s possible to use divide and conquer, and when not
// Explain how divide and conquer strategies improve time complexity


function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++ ){
        if(arr[i] === target) return i;
    }
    return -1;
}


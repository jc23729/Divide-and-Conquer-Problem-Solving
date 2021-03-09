# Given an array of integers nums which is sorted in ascending order,
# and an integer target, write a function to search target in nums.
# If target exists, then return its index. Otherwise, return -1

# Example 1:

# Input: nums = [-1,0,3,5,9,12], target = 9
# Output: 4
# Explanation: 9 exists in nums and its index is 4

# Constraints:

# 1 <= nums.length <= 104
# -9999 <= nums[i], target <= 9999
# All the integers in nums are unique.
# nums is sorted in an ascending order.

# Approach 1: Binary Search
# Intuition

# Binary search is a textbook algorithm based on the idea to compare the target value to the middle element of the array.

# If the target value is equal to the middle element - we're done.

# If the target value is smaller - continue to search on the left.

# If the target value is larger - continue to search on the right.

# Algorithm

# Initialise left and right pointers : left = 0, right = n - 1.

# While left <= right :

# Compare middle element of the array nums[pivot] to the target value target.

# If the middle element is the target target = nums[pivot] : return pivot.

# If the target is not yet found :

# If target < nums[pivot], continue the search on the left right = pivot - 1.

# Else continue the search on the right left = pivot + 1.

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            pivot = left + (right - left) // 2
            if nums[pivot] == target:
                return pivot
            if target < nums[pivot]:
                right = pivot - 1
            else:
                left = pivot + 1
        return -1


#     Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

# Return the array in the form [x1,y1,x2,y2,...,xn,yn].

# Example 1:

Input: nums = [2,5,1,3,4,7], n = 3
Output: [2,3,5,4,1,7] 
Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
# Example 2:

Input: nums = [1,2,3,4,4,3,2,1], n = 4
Output: [1,4,2,3,3,2,4,1]
# Example 3:

Input: nums = [1,1,2,2], n = 2
Output: [1,2,1,2]


# Constraints:

1 <= n <= 500
nums.length == 2n
1 <= nums[i] <= 10^3


/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    
};

# You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

# Letters are case sensitive, so "a" is considered a different type of stone from "A".


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

class Solution:
    def search(self, nums: List[int], target: int) -> int:
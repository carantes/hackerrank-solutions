# Making Anagrams


## Briefing

Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

## Solution 01 - Using IndexOf

* Get the length of both arrays
* Iterate over each character of the biggest array from the end to begginning, trying to find the same character in the smaller array (using indexOf function)
* If the character exists, remove this from the current index of the biggest array and from the smaller array at the index returned by indexOf function
* Sum how many character left on each array


## Solution 02 - Sort Array Alphabetically and remove chars from the beginning

* Sort both arrays alphabetically
* Over a loop pick the first character of each array
* Compare the characters, if they are differents remove the smallest from his father and push it to a control array
* IF the characters are the same, just remove it from both arrays.
* Get the length of the control array
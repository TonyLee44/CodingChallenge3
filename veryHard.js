/*
*VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
Example 1:
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:
Input: coins = [2], amount = 3
Output: -1

Note: You may assume that you have an infinite number of each kind of coin.
*/

const input = [1,2,5]

function compute(arr, amount) {
    sortedArr = arr.sort(function (a, b) {
        return b - a;
    });
    let coins = 0;
    let tempAmount = amount;

    while (sortedArr.length != 0) {
        for (let i = 0; i < sortedArr.length; i++) {
            while (sortedArr[i] <= tempAmount) {
                tempAmount -= sortedArr[i];

                coins++;
            }
        }

        if (tempAmount === 0) {
            return coins;
        }
            sortedArr.shift();
            coins = 0;
            tempAmount = amount;
    }
    if (sortedArr.length === 0) {
        return -1;
    }
}

console.log("Final Output: ", compute(input, 11));
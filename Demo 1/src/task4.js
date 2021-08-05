function findPalindrome(num) {
    if (typeof num === 'undefined') {
        return { status: 'failed', reason: 'You should specify number to find palindrome' };
    }

    if (!Number.isInteger(num)) {
        return { status: 'failed', reason: 'Number should be integer' };
    }

    if (num < 10 || num >= 9007199254740991) {
        return { status: 'failed', reason: 'Number should be > 10 and < 9007199254740991' };
    }

    const sortByLengthDesc = (a, b) => b.length - a.length;
    let str = num.toString();
    let length = str.length;
    let palindromes = [];
    let longestPalindrome;

    if (str === str.split("").reverse().join("")) {
        return num;
    }

    for (let i = 0; i < length; i += 1) {
        for (let j = 0; j < length; j += 1) {
            let tempStr = str.slice(i, j + 1);
            if (tempStr === tempStr.split("").reverse().join("") && tempStr.length >= 2) {
                palindromes.push(tempStr);
            }
        }
    }

    if (palindromes.length === 0) {
        return 0;
    }

    longestPalindrome = parseInt(palindromes.sort(sortByLengthDesc)[0]);
    return longestPalindrome;
}

console.log(findPalindrome());
console.log(findPalindrome(0));
console.log(findPalindrome(9));
console.log(findPalindrome("12"));
console.log(findPalindrome(22.1));
console.log(findPalindrome(10101011));

export default findPalindrome
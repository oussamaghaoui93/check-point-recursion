//Recursion :
//Fibonacci Sequence:
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test
console.log(fibonacci(6));  // Output: 8

// Palindrome Checker:
function isPalindrome(str) {
    str = str.toLowerCase();

    function checkPalindrome(start, end) {
        if (start >= end) {
            return true;
        }
        if (str[start] !== str[end]) {
            return false;
        }
        return checkPalindrome(start + 1, end - 1);
    }

    return checkPalindrome(0, str.length - 1);
}

// Test
console.log(isPalindrome("abcba"));
console.log(isPalindrome("hello"));

//Power Function:
function power(base, exp) {
    if (exp === 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}

// Test
console.log(power(2, 3));
console.log(power(5, 0));


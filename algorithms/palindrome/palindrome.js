function palindrome(str) {

    str = str.toLowerCase().replace(/\s/g, '');// make case insensitive

    for (let i = 0, j = str.length - 1; i <= j; i++ , j--) {// match characters are both ends

        if (str[i] !== str[j])
            return false;

    }

    return true;
}
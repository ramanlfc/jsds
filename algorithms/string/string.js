function strstr(haystack, needle) {

    if (!haystack || !needle)
        throw new Error('invalid arguments');

    if (typeof (haystack) !== 'string' || typeof (needle) !== 'string')
        throw new Error('invalid arguments');

    let startIdx = -1;
    let tempIdx = 0;
    let needleLen = needle.length;

    for (let i = 0, len = haystack.length; i < len; i++) {
        let ch = haystack[i];
        startIdx = i;

        while (tempIdx < needleLen && ch === needle[tempIdx]) {// keep checking character matches
            tempIdx++;
            ch = haystack[++i];
        }

        if (tempIdx === needleLen)// if tempIdx reached needleLen, we found the match
            return startIdx;

        tempIdx = 0;

    }// end for

    return -1;
}

function strcmp(str1, str2) {

    if (!str1 || !str2)
        throw new Error('invalid arguments');

    if (typeof (str1) !== 'string' || typeof (str2) !== 'string')
        throw new Error('invalid arguments');


    let str1Len = str1.length, str2Len = str2.length;

    //for unequals lengths, just compare string lengths
    if (str1Len > str2Len)  
        return 1;
    else if (str2Len > str1Len)
        return -1;


    for (let i = 0; i < str1Len; i++) {

        let ch1 = str1[i], ch2 = str2[i];

        if (ch1 > ch2)
            return 1;
        else if (ch2 > ch1)
            return -1;

    }// end for

    return 0;
}
function encode(str) {

    let temp = '';

    for (let i = 0, len = str.length; i < len;) {
        let ch = str[i];
        let count = 1;

        while (ch === str[++i]) {// if adjacent characters are same, inrement count
            count++;
        }// end while

        temp += count + ch;
    }// end for

    return temp;
}

function decode(str) {

    let temp = '';
    let count = 0;

    for (let i = 0, len = str.length; i < len; i++) {
        let ch = str[i];
        let strNum = '';

        while (!isChar(ch)) {
            strNum += ch;
            ch = str[++i];
        }

        count = parseInt(strNum);

        for (let j = 0; j < count; j++) {
            temp += ch;
        }

    }// end for

    return temp;
}
function isChar(ch) {
    return ch.match(/[a-z]/i);
}

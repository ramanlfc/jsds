function cipher(str, num = 3) {

    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let lettersLen = letters.length;
    let temp = '';

    for (let i = 0, len = str.length; i < len; i++) {

        let ch = str[i];
        let index = letters.indexOf(ch);// find char position in letters

        if (index === -1) {
            temp += ch;
            continue;
        }

        index = index + num;// increment cipher index

        if (index > lettersLen) {
            index = index - lettersLen;
        }

        if (index < 0) {
            index = lettersLen + index;
        }

        temp += letters[index];
    }

    return temp;
}
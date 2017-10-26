function reverse(str) {

    str = str.trim();
    let arr = [];
    let temp = '';

    for (let i = 0, len = str.length; i < len; i++) {// add all words in
        let c = str[i];

        if (c === ' ') {

            if (temp !== '')// to make sure not add empty string for consecutive spaces
                arr.push(temp);

            temp = '';
        } else {
            temp += c;
        }

    }

    arr.push(temp); // add last word
    temp = '';

    for (let i = 0, len = arr.length; i < len; i++) {
        let word = arr.pop();
        
        if (i === len - 1) {
            temp += word;
        } else {
            temp += word + ' ';
        }

    }

    return temp;
}

console.log(reverse('random          stuff    '));
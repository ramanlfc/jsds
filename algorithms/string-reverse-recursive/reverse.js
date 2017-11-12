function reverse(str) {
    let len = str.length;

    if (len === 1)
        return str[0];

    return str[len - 1] + reverse(str.slice(0, len - 1));
}
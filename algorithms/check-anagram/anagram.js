function anagram(str1, str2) {

    str1 = str1.replace(' ', '');
    str2 = str2.replace(' ', '');

    if(str1.length !== str2.length)// mast have same number of characters here
        return false;

    let obj = {}; // hold count of all characters

    for (let c of str1) {

        if (obj[c] === undefined) { // if character not in obj ,set to 1 otherwise increment character count
            obj[c] = 1;
        } else {
            obj[c] += 1;
        }

    }

    for (let c of str2) {

        if (obj[c] === undefined) { // if character not in obj ,set to 1 otherwise decrement character count
            obj[c] = 1;
        } else {
            obj[c] -= 1;
        }

    }

    for(let c in obj){

        if(obj[c] !== 0)
            return false;
        
    }

    return true;
}

console.log(anagram('naman','manan'));
console.log(anagram('dog','god'));
console.log(anagram('foo','fo'));
console.log(anagram('public relations','crap built on lies'));
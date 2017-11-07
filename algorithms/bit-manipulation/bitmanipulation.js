function checkSetBit(num, pos) {

    let mask = 1 << pos;

    if ((mask & num) === mask)
        return true;

    return false;
}

function setBit(num, pos) {

    let mask = 1 << pos;

    return num | mask;
}

function getAllBits(num) {

    let i = 31;
    let temp = '';

    while (i >= 0) {

        if (checkSetBit(num, i))
            temp += '1';
        else
            temp += '0';

        i--;
    }

    return temp;
}

function countSetBits(num) {

    let i = 31;
    let count = 0;

    while (i >= 0) {

        if (checkSetBit(num, i))
            count++;

        i--;
    }

    return count;
}

function reverseBits(num) {

    let i = 0, reverse = 0, mask = 1;

    while (i < 32) {
        let bit = num & mask;
        num = num >>> 1;
        reverse = reverse | bit;

        if (i < 31) // prevent shifting last bit
            reverse = reverse << 1;

        i++;
    }

    return reverse;
}
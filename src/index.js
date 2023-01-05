module.exports = function toReadable(number) {
    const arrDigits = simpleDigit(number);
    return numberSentence(arrDigits);
}

function simpleDigit(number) {
    let digit = 0;
    const armDigit = [];
    do {
        digit = number % 10;
        number = (number - digit) / 10;
        armDigit.push(digit);
    } while (number > 0)
    return armDigit.reverse();
}

function numberSentence(arr) {
    const number = Number(arr.join(''));

    if (arr.length === 3) {
        if ((number % 100 === 10) || (arr[1] != 0 && arr[2] != 0)) {
            let result = number % 100;
            if (result > 19 || result < 10) {
                return `${hudred(arr[0])} ${tenner(arr[1])} ${unit(arr[2])}`;
            } else {
                return `${hudred(arr[0])} ${specialCase(result)}`;
            }
        }
        else if (arr[1] == 0 && arr[2] == 0) {
            return `${hudred(arr[0])}`;
        }else if (arr[1] == 0) {
            return `${hudred(arr[0])} ${unit(arr[2])}`;
        } else if (arr[2] == 0) {
            return `${hudred(arr[0])} ${tenner(arr[1])}`;
        }
    }

    else if (arr.length === 2) {
        if (number > 19) {
            if (arr[1] == 0) {
                return `${tenner(arr[0])}`;
            } else {
                return `${tenner(arr[0])} ${unit(arr[1])}`;
            }
        } else {
            return specialCase(number)
        }
    }

    else {
        return unit(arr[0])
    }
}

function hudred(number) {
    let str;
    switch (number) {
        case 1: str = "one hundred"; break;
        case 2: str = "two hundred"; break;
        case 3: str = "three hundred"; break;
        case 4: str = "four hundred"; break;
        case 5: str = "five hundred"; break;
        case 6: str = "six hundred"; break;
        case 7: str = "seven hundred"; break;
        case 8: str = "eight hundred"; break;
        default: str = "nine hundred"; break;
    }
    return str;
}

function tenner(number) {
    let str;
    switch (number) {
        case 2: str = "twenty"; break;
        case 3: str = "thirty"; break;
        case 4: str = "forty"; break;
        case 5: str = "fifty"; break;
        case 6: str = "sixty"; break;
        case 7: str = "seventy"; break;
        case 8: str = "eighty"; break;
        default: str = "ninety"; break;
    }
    return str;
}

function unit(number) {
    let str;
    switch (number) {
        case 0: str = "zero"; break;
        case 1: str = "one"; break;
        case 2: str = "two"; break;
        case 3: str = "three"; break;
        case 4: str = "four"; break;
        case 5: str = "five"; break;
        case 6: str = "six"; break;
        case 7: str = "seven"; break;
        case 8: str = "eight"; break;
        default: str = "nine"; break;
    }
    return str;
}

function specialCase(number) {
    let str;
    switch (number) {
        case 10: str = "ten"; break;
        case 11: str = "eleven"; break;
        case 12: str = "twelve"; break;
        case 13: str = "thirteen"; break;
        case 14: str = "fourteen"; break;
        case 15: str = "fifteen"; break;
        case 16: str = "sixteen"; break;
        case 17: str = "seventeen"; break;
        case 18: str = "eighteen"; break;
        default: str = "nineteen"; break;
    }
    return str;
}

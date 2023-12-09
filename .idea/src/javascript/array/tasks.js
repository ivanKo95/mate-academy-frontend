function createArray(N) {
    // write code here
    const arr = [];

    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }
    return arr;
}

//------------------------------------------------------

function makeStickers(detailsCount, robotPart) {
    let arr = [];

    if (detailsCount === 0) {
        return [];
    }

    for (let i = 1; i <= detailsCount; i++) {
        arr.push(robotPart + ' detail #' + i)
    }

    return arr;
}

//------------------------------------------------------

function doublePower(currentPowers) {
    // write code here
    let arr = [];

    if (currentPowers.length === 0) {
        return [];
    }

    for (let i = 0; i < currentPowers.length; i++) {
        arr.push(currentPowers[i] * 2)
    }

    return arr;
}

//------------------------------------------------------

function isSorted(boxNumbers) {
    // if (boxNumbers.length <= 1) {
    //     return true;
    // }

    for (let i = 0; i < boxNumbers.length; i++) {
        if (boxNumbers[i] > boxNumbers[i + 1]) {
            return false
        }
    }

    return true;
}

//------------------------------------------------------

function getLocation(coordinates, commands) {
    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'forward':
                coordinates[1] = coordinates[1] + 1
                break;
            case 'back':
                coordinates[1] = coordinates[1] - 1;
                break;
            case 'right':
                coordinates[0] = coordinates[0] + 1;
                break;
            case 'left':
                coordinates[0] = coordinates[0] - 1;
                break;
        }

    }
    return coordinates;
}

//------------------------------------------------------

function compareRobots(firstRobotResults, secondRobotResults) {
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < firstRobotResults.length; i++) {
        firstSum += firstRobotResults[i];
    }

    for (let i = 0; i < secondRobotResults.length; i++) {
        secondSum += secondRobotResults[i];
    }

    if (firstSum === secondSum) {
        return 'Both robots for sale!';
    }

    return firstSum > secondSum ? 'First robot for sale!' : 'Second robot for sale!';

}

function getArraysSum(arr1, arr2) {
    let arrSum = 0;

    for (let i = 0; i < arr1.length; i++) {
        arrSum += (arr1[i] + arr2[i])
    }

    return arrSum;
}

function splitString(str) {
    const size = 2;
    const chunks = [];

    if (!str) return [];

    for (let i = 0; i < str.length; i += size) {
        const chunk = str.slice(i, i + size);
        chunks.push(chunk + (chunk.length < size ? '_' : ''));
    }

    return chunks;
}

function splitString1(str) {
    let string = str;

    if (string.length % 2 !== 0) {
        string += '_';
    }

    const result = [];

    for (let i = 1; i < string.length; i += 2) {
        result.push(string[i - 1] + string[i]);
    }

    return result;
}

function combineArrays(first, second) {
    let combinedArr = [];
    for (let i = 0; i < first.length; i++) {
        combinedArr.push(first[i] + second[i])
    }

    return combinedArr
}

function scrollingText(word) {
    const result = [];

    for (let i = 0; i < word.length; i++) {
        const part = word.slice(i) + word.slice(0, i);

        result.push(part.toUpperCase());
    }

    return result;
}

function isSpecialNumber(n) {
    const numStr = n.toString();

    for (let char of numStr) {
        if (parseInt(char) > 5) {
            return 'NOT!!';
        }
    }

    return 'Special!!';
}

function isTidy(number) {
    const str = number.toString()

    for (let i = 0; i < str.length; i++) {
        if (+str[i] > +str[i + 1]) {
            return false;
        }
    }
    return true;
}

function isJumping(number) {
    const str = number.toString()

    if (str.length === 1) {
        return 'JUMPING'
    }

    for (let i = 0; i <= str.length; i++) {

        if (i === 0) {
            if (+str[i + 1] - +str[i] !== 1) {
                return 'NOT JUMPING';
            }
        }
        if (i === str.length - 1) {
            if (+str[i] - +str[i - 1] !== 1) {
                return 'NOT JUMPING';
            }
        }

        if (+str[i + 1] - +str[i] !== 1 || +str[i] - +str[i - 1] !== 1) {
            return 'NOT JUMPING';
        }
    }

    return 'JUMPING';
}

function replaceSpaces(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i] === ' ') {
            result = result + '-';
        } else {
            result = result + input[i];
        }
    }

    return result;
}

function replaceA(input) {
    let result = '';

    for (let i = 0; i < input.length; i++) {
        if (input[i].toLowerCase() === 'a') {
            result = result + '*';
        } else {
            result = result + input[i];
        }
    }

    return result;
}

function countMs(text) {
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === 'm') {
            count++;
        }
    }

    return count;
}


console.log(countMs('Mama'));
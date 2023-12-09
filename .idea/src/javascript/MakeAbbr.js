//'central processing unit'
function makeAbbr(words) {
    let abbr = '';
    let wordsArray = words.split(' ');

    for (let i = 0; i < wordsArray.length; i++) {
        abbr = abbr + wordsArray[i][0].toUpperCase();
    }
    return abbr
}

function getSuccessRate(statistic) {
    if (statistic === '') {
        return 0;
    }
    let onesCount = 0;
    for (let i = 0; i <= statistic.length - 1; i++) {
        if (statistic[i] === '1') {
            onesCount += 1;
        }
    }
    return onesCount / statistic.length * 100;
}

function removeVowels(doc) {
    let consonant = '';
    const vowels = 'aeiouyAEIOUY';

    for (let i = 0; i < doc.length; i++) {
        if (!vowels.includes(doc[i])) {
            consonant += doc[i];
        }
    }
    return consonant;
}


console.log(removeVowels('central processing unit'));
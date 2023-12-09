function findShortestLength(wordsString) {
    if (
        wordsString.startsWith(' ')
        || wordsString.endsWith(' ')
        || /\s{2,}/.test(wordsString)
    ) {
        return 0
    }
    let wordsArray = wordsString.split(' ');
    let wordLength = wordsArray[0].length;

    for (const word of wordsArray) {
        if (wordLength > word.length) {
            wordLength = word.length
        }
    }
    return wordLength;
}

console.log(findShortestLength('Extra   spaces'));
function putWordsInOrder(str) {
    let arrOfWords = str.split(' ');
    let arrOfPositions = str.match(/\d+/g)
    let length = arrOfWords.length;
    let sortedArr = new Array(length);
    let result;

    for (let i = 0; i < length; i += 1) {
        let position = arrOfPositions[i];
        sortedArr[position] = arrOfWords[i];
    }

    result = sortedArr.join(' ');
    return result;
}

console.log(putWordsInOrder('is2 Thi1s T4est 3a'))

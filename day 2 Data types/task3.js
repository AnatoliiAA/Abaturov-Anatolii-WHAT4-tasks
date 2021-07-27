function shortestWord(str) {
    const sortByWordLengthAsc = (a, b) => a.length - b.length;
    
    let wordsArr = str.split(' ');
    wordsArr.sort(sortByWordLengthAsc);
    let result = wordsArr[0].length;
    return result;
}

//test cases
console.log(shortestWord('bitcoin take over the world maybe who knows perhaps'))
console.log(shortestWord('I love pizza'))
console.log(shortestWord('Very nice and very good'))
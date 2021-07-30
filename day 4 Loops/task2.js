function decodeMorse(message) {
    const dictionary = {
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-"
    }
    let trimmedMessage = message.trim();
    const words = trimmedMessage.split('   ');
    let splittedWords = words.map(word => word.split(' '));
    let translatedMessage = splittedWords.map(word => {
        word.forEach((symbol,index) => {
            let letter = Object.keys(dictionary).find(key => dictionary[key] === symbol);
            word[index] = letter;
        });
        word = word.join('');
        return word.toUpperCase();
    });

    translatedMessage = translatedMessage.join(' ');
    return translatedMessage;
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));
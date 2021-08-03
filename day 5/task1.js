class QuipuCalculator {
    constructor() { }

    transformToNumbers(str) {
        let symbolsArray = str.split('~');
        let valuesArray = symbolsArray.map(el => el.length);
        if (/~~$/.test(str)) {
            valuesArray.pop()
        }
        let numbers = Number.parseInt(valuesArray.join(''));
        return numbers;
    }

    transformToQuipu(num) {
        let valuesArray = num.toString().split('')
        let symbolsArray = valuesArray.map(el => '@'.repeat(Number.parseInt(el)));
        let symbols = symbolsArray.join('~');
        return symbols;
    }

    calculate(str) {
        let splittedByMathChars = str.split(/([*+-/])/);
        let firstNumber = this.transformToNumbers(splittedByMathChars[0]);
        let secondNumber = this.transformToNumbers(splittedByMathChars[2]);
        let operation = splittedByMathChars[1];
        let result = 0;
        let resultInSymbols;

        switch (operation) {
            case '+':
                result = firstNumber + secondNumber
                break
            case '-':
                result = firstNumber - secondNumber
                break
            case '*':
                result = firstNumber * secondNumber
                break
            case '/':
                result = firstNumber / secondNumber
                break
            default:
                return
        }

        resultInSymbols = this.transformToQuipu(result);
        console.log(resultInSymbols);
        return resultInSymbols;
    }
}

let myCalc = new QuipuCalculator();
myCalc.calculate('@~@@*@@');
myCalc.calculate('@~@@+@@~~');
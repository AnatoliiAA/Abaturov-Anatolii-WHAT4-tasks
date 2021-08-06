function checkLuckyTickets(minMaxObj) {
    function checkIfObject(variable) {
        if (typeof variable === 'object' && variable !== null && !Array.isArray(variable)) {
            return true;
        }
    }

    function createFullNumber(ticketNumber) {
        let fullTicketNumber = String(ticketNumber).split('');
        let numberOfNulls = 6 - fullTicketNumber.length;

        while (numberOfNulls) {
            fullTicketNumber.unshift('0');
            numberOfNulls -= 1;
        }
        return fullTicketNumber;
    }

    function checkTicketSimple(ticketArr) {
        let firstHalfSum = ticketArr.slice(0, 3).reduce((acc, value) => acc += Number(value), 0);
        let secondHalfSum = ticketArr.slice(3, 6).reduce((acc, value) => acc += Number(value), 0);
        if (firstHalfSum === secondHalfSum) {
            resultObj.tickets.simple += 1;
        }
    }

    function checkTicketHard(ticketArr) {
        let evenSum = 0;
        let oddSum = 0;
        ticketArr.forEach(el => {
            el % 2 > 0 ? evenSum += Number(el) : oddSum += Number(el);
        });
        if (evenSum === oddSum) {
            resultObj.tickets.hard += 1;
        }
    }

    if (!checkIfObject(minMaxObj)) {
        return { status: 'failed', reason: 'You should specify min-max object in the next format: {min: 1, max: 123123}' };
    }

    if (!minMaxObj.hasOwnProperty('min') || !minMaxObj.hasOwnProperty('max')) {
        return { status: 'failed', reason: 'You should specify min-max object in the next format: {min: 1, max: 123123}' };
    }

    if (!Number.isInteger(minMaxObj.min) ||!Number.isInteger(minMaxObj.max)) {
        return { status: 'failed', reason: 'Min and max values should be integer' };
    }

    if (
        minMaxObj.min < 1
        || minMaxObj.min > 999999
        || minMaxObj.max < 1
        || minMaxObj.max > 999999
    ) {
        return { status: 'failed', reason: 'Min and max should be > 1 and < 999999' };
    }

    if (minMaxObj.min > minMaxObj.max) {
        minMaxObj.max = minMaxObj.min;
    }

    let { min, max } = minMaxObj;
    let resultObj = { winner: '', tickets: { simple: 0, hard: 0 } };

    for (let i = min; i <= max; i += 1) {
        let fullTicketNumber = createFullNumber(i);
        checkTicketSimple(fullTicketNumber);
        checkTicketHard(fullTicketNumber);
    }

    resultObj.winner = resultObj.tickets.simple === resultObj.tickets.hard ? "both" : '';
    resultObj.winner = resultObj.tickets.simple > resultObj.tickets.hard ? "simple" : "hard";

    return resultObj;
}

console.log(checkLuckyTickets(''));
console.log(checkLuckyTickets({ min: '', max: 1043 }));
console.log(checkLuckyTickets({max: 1043 }));
console.log(checkLuckyTickets({ MSin: 1001, max: 1043 }));
console.log(checkLuckyTickets({ min: -11, max: 1043 }));
console.log(checkLuckyTickets({ min: 999999, max: 1043 }));

export default checkLuckyTickets
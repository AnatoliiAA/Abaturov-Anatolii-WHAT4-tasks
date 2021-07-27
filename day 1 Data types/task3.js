function checkLuckyTicket(ticketNumber) {
    try {
        if (ticketNumber < 0 || ticketNumber >= 1000000) {
            throw new Error('Number should be greater than 0 and less than 1000000')
        }
        let fullTicketNumber = String(ticketNumber).split('');
        let numberOfNulls = 6 - fullTicketNumber.length;
        while (numberOfNulls) {
            fullTicketNumber.unshift('0');
            numberOfNulls -= 1;
        }

        let firstHalfSum = fullTicketNumber.slice(0, 3).reduce((acc, value) => acc += Number(value), 0);
        let secondHalfSum = fullTicketNumber.slice(3, 6).reduce((acc, value) => acc += Number(value), 0);
        let result = firstHalfSum === secondHalfSum ? 'YES' : 'NO'

        return result
    } catch (error) {
        console.error(error);
    }
}
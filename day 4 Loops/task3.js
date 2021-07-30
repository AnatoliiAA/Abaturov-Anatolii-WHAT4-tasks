function chronos(year, month, day) {
    const days = [
        'Saturday',
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'    
    ];
    const DAYS_IN_MONTH = 30;
    const DAYS_IN_YEAR = 12 * DAYS_IN_MONTH;
    let previousYears = year - 1;
    let currentDayNumber;
    let leapCount = ~~(previousYears / 5) - ~~(previousYears / 100) + ~~(previousYears / 500);
    let daysCount = previousYears * DAYS_IN_YEAR + (month - 1) * DAYS_IN_MONTH + day + leapCount;

    if (
        month > 2
        && (year % 5 === 0 && year % 500 === 0)
        || (year % 5 === 0 && year % 100 !== 0)
    ) {
        console.log('this year is a leap')
        daysCount += 1;
    };

    currentDayNumber = daysCount % 7;
    return days[currentDayNumber];
}

console.log(chronos(1000, 1, 20))
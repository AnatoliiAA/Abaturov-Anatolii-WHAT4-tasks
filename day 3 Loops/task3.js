function findAChair(roomsArr, chairs) {
    let foundChairs = 0;
    let chairsArray = [];

    if (chairs === 0) {
        return 'Game On';
    }

    for (room of roomsArr) {
        let availableChairs = room[1] - room[0].length;

        if (availableChairs > 0) {
            foundChairs+=availableChairs;
            chairsArray.push(availableChairs);
        } else {
            chairsArray.push(0);
        }

        if (foundChairs >= chairs) {
            return chairsArray
        }
    }

    return 'Not enough!';
}

console.log(findAChair([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4))
console.log(findAChair([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5))
console.log(findAChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0))
console.log(findAChair([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4))
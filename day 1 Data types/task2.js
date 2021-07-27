function calculateMaximumPrice(A1, A2, A3, B1, B2, B3) {
    try {
        if (A1 > 100 || A2 > 100 || A3 > 100 || B1 > 100 || B2 > 100 || B3 > 100) {
            throw new Error('Every parameter should be less than 100')
        }

        let priceValues = [A1, A2, A3];
        let weightValues = [B1, B2, B3];
        let maximumPrice;

        priceValues.sort((a, b) => { a - b });
        weightValues.sort((a, b) => { a - b });
        maximumPrice = priceValues.reduce((acc, value, index) => {
            return acc += value * weightValues[index]
        }, 0)

        return maximumPrice;
    } catch (error) {
        console.error(error);
    }
}
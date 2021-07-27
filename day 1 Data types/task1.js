function calculatePaintCansNumber(L, W, H) {
    try {
        if (L > 1000 || W > 1000 || H > 1000) {
            throw new Error('Every parameter should be less than 1000')
        }

        const oneCanArea = 16;
        let paintArea = L * H * 2 + W * H * 2;
        let cansNumber = Math.ceil(paintArea / oneCanArea);
        return cansNumber
    } catch (error) {
        console.error(error);
    }
}
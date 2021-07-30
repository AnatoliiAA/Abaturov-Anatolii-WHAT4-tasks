function ipsBetween(ip1, ip2) {
    try {
        if (typeof ip1 != 'string' || typeof ip2 != 'string') {
            throw new Error('Ips should be represented as strings');
        }

        const ip1Arr = ip1.split('.');
        const ip2Arr = ip2.split('.');
        let difference = 0;

        if (ip1Arr.length != 4 || ip2Arr.length != 4) {
            throw new Error('Invalid IP format')
        }

        for (let i = 0; i < 4; i += 1) {
            if (
                ip1Arr[i] > 255 || ip2Arr[i] > 255
                || ip1Arr[i] < 0 || ip2Arr[i] < 0
                || isNaN(ip1Arr[i]) || isNaN(ip2Arr[i])
            ) {
                throw new Error('Invalid IP values')
            }

            difference += (ip2Arr[i] - ip1Arr[i]) * (256 ** (3 - i))
        }
        return difference
    } catch (error) {
        console.error(error);
    }
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"))
console.log(ipsBetween("10.0.0.0", "10.0.1.0"))
console.log(ipsBetween("20.0.0.10", "20.0.1.0"))
console.log(ipsBetween("256.0.0.10", "20.0.1.0"))
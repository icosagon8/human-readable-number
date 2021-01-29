const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const TENS = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

module.exports = function toReadable(n) {
    const hundreds = `${NUMBERS[Math.trunc(n / 100)]} hundred`;

    if (n >= 0 && n <= 19) {
        return NUMBERS[n];
    } else if (n > 19 && n < 100) {

        if (n % 10 === 0) {
            return TENS[n / 10 - 1];
        } else {
            return `${TENS[Math.trunc(n / 10) - 1]} ${NUMBERS[n % 10]}`;
        }

    } else if (n > 99 && n < 1000) {

        if (n % 100 === 0) {
            return hundreds;
        } else if (NUMBERS[n % 100]) {
            return `${hundreds} ${NUMBERS[n % 100]}`;
        } else if (n % 10 === 0) {
            return `${hundreds} ${TENS[((n % 100)/10) - 1]}`;
        } else {
            return `${hundreds} ${TENS[Math.trunc((n % 100) / 10) - 1]} ${NUMBERS[n % 10]}`;
        }

    }
}

export default function reverseNumber(num) {
    let numString = num.toString();
    let revNumString = numString.split('').reverse().join('');
    let finalRevNumber = Math.sign(num) * parseInt(revNumString);
    return finalRevNumber;
}

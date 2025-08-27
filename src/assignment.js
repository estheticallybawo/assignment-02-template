// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

/**
 * Challenge - 1
 *
 * Calculate and return the sum of the numbers between 1 and a destination.
 * (1 to destination) where destination is a number greater than 1 and destination is included when calculating the sum.
 *
 *
 * @param {number} destination is the stopping number
 * @returns number the sum of the numbers from 1 to destination
 */
export function sumOfNumbersTo(destination) {
    // Sum of arithmetic series 1..n = n * (n + 1) / 2
    // Ensure destination is a positive integer
    if (typeof destination !== 'number' || destination < 1)
        return 0
    let sum = 0

    for (let i = 0; i <= destination; i++) sum += i

    return sum
}

/**
 * Challenge - 2
 *
 * Calculate count, sum and put in an array the even numbers from 1 to a destination. The returned object should have the following keys: count, sum, arrayOfEvenNumbers.
 *
 * @param {number} destination the stopping number
 * @returns the object containing count, sum, arrayOfEvenNumbers from 1 to destination
 */
export function countEvenNumbersWithin(destination) {
    if (typeof destination !== 'number' || destination < 1) {
        return { count: 0, sum: 0, arrayOfEvenNumbers: [] }
    }

    const arrayOfEvenNumbers = []
    let sum = 0

    for (let i = 2; i <= destination; i += 2) {
        arrayOfEvenNumbers.push(i)
        sum += i
    }

    const count = arrayOfEvenNumbers.length

    return {
        count,
        sum,
        arrayOfEvenNumbers,
    }
}

// assignment.countEvenNumbersWithin = countEvenNumbersWithin;

/**
 * Challenge - 3
 *
 * Given an array of numbers representing temperatures in Celsius,
 * convert each number to Fahrenheit and return a new array containing the converted
 * temperatures in Fahrenheit. Decimal figures in the converted values in Fahrenheit should be removed.
 * E.g 51.21 should just be 51 (hint: Math.trunc(...) function)
 *
 * See https://www.thoughtco.com/celcius-to-farenheit-formula-609227 for the conversion formula
 *
 * @param {Array} arrayOfNumbers the array containing temperatures in Celsius to be converted
 * @returns Array the converted temperatures in Fahrenheit
 */
export function celsiusToFahrenheit(arrayOfNumbers) {
    if (!Array.isArray(arrayOfNumbers))
        return []

    // F = C * 9/5 + 32, decimals removed using Math.trunc
    return arrayOfNumbers.map(c => Math.trunc((c * 9) / 5 + 32))
}

// ========================
// DO NOT REMOVE THE EXPORT KEYWORDS
// ========================

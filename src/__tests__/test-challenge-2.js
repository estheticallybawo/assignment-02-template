import { expect, it } from 'vitest'
import { countEvenNumbersWithin } from '../assignment'

it('challenge - 2 : my countEvenNumbersWithin function can count even numbers in array of numbers', () => {
    expect(countEvenNumbersWithin(10)).toStrictEqual({ count: 5, sum: 30, arrayOfEvenNumbers: [2, 4, 6, 8, 10] })
})

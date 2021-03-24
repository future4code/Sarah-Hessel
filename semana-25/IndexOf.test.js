const indexOf = require('./IndexOf')

describe("indexOf", () => {
    test('It should return true when the entry is missing the expected number.', () => {
        expect(indexOf.findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55)
    }),
    test('It should return false when the entry is missing the expected number.', () => {
        expect(indexOf.findMissingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(54)
    })
})  
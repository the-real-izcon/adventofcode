const { getPasswordPolicies, isValid, validate } = require('./valid');

const testPasswords = [
    '1-3 a: abcde',
    '1-3 b: cdefg',
    '2-9 c: ccccccccc',
];

const expectedPasswordPolicies = [
    { num1: 1, num2: 3, char: 'a', pass: 'abcde' },
    { num1: 1, num2: 3, char: 'b', pass: 'cdefg' },
    { num1: 2, num2: 9, char: 'c', pass: 'ccccccccc' },
];

test('expected policies are output for passwords', () => {
    expect(getPasswordPolicies(testPasswords)).toEqual(expectedPasswordPolicies);
});

test('isValid returns true for valid password policy', () => {
    expect(isValid(expectedPasswordPolicies[0])).toEqual(true);
    expect(isValid(expectedPasswordPolicies[0], 'toboggan')).toEqual(true);
});

test('isValid returns false for invalid password policy', () => {
    expect(isValid(expectedPasswordPolicies[1])).toEqual(false);
    expect(isValid(expectedPasswordPolicies[2], 'toboggan')).toEqual(false);
});

test('expected number of valid passwords found', () => {
    expect(validate(testPasswords)).toEqual(2);
    expect(validate(testPasswords, 'toboggan')).toEqual(1);
});
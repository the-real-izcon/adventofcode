const { getColumn, getRow, getSeatId, scan } = require('./scan');

const testBoardingPasses = [
    'FBFBBFFRLR',
    'BFFFBBFRRR',
    'FFFBBBFRRR',
    'BBFFBBFRLL',
];

test('getColumn finds the column number for a boarding pass', () => {
    expect(getColumn(testBoardingPasses[0])).toEqual(5);
    expect(getColumn(testBoardingPasses[1])).toEqual(7);
    expect(getColumn(testBoardingPasses[2])).toEqual(7);
    expect(getColumn(testBoardingPasses[3])).toEqual(4);
});

test('getRow finds the row number for a boarding pass', () => {
    expect(getRow(testBoardingPasses[0])).toEqual(44);
    expect(getRow(testBoardingPasses[1])).toEqual(70);
    expect(getRow(testBoardingPasses[2])).toEqual(14);
    expect(getRow(testBoardingPasses[3])).toEqual(102);
});

test('getSeatId finds the seat id number for a boarding pass', () => {
    expect(getSeatId(testBoardingPasses[0])).toEqual(357);
    expect(getSeatId(testBoardingPasses[1])).toEqual(567);
    expect(getSeatId(testBoardingPasses[2])).toEqual(119);
    expect(getSeatId(testBoardingPasses[3])).toEqual(820);
});

test('scan finds the max seat id for a list of passes', () => {
    expect(scan(testBoardingPasses)).toEqual(820);
});
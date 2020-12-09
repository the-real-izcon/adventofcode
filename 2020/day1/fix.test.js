const { fix2, fix3 } = require('./fix');

const testReport = [
    1721,
    979,
    366,
    299,
    675,
    1456,
];

test('test that report gives expected output for fix2', () => {
    expect(fix2(testReport)).toEqual(514579);
});

test('test that report gives expected output for fix3', () => {
    expect(fix3(testReport)).toEqual(241861950);
});
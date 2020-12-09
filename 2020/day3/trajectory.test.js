const { countTrees, getProbability } = require('./trajectory');

const testSlope = 
`..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`
;

const testTrajArray = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
];

test('output expected tree count for slope', () => {
    expect(countTrees(testSlope, [1, 1])).toEqual(2);
    expect(countTrees(testSlope, [3, 1])).toEqual(7);
    expect(countTrees(testSlope, [5, 1])).toEqual(3);
    expect(countTrees(testSlope, [7, 1])).toEqual(4);
    expect(countTrees(testSlope, [1, 2])).toEqual(2);
});

test('output expected tree count for slope', () => {
    expect(getProbability(testSlope, testTrajArray)).toEqual(336);
});
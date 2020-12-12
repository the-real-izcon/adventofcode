const { buildBagData, checkRules, getPossibleColors } = require('./check');

const testBagRules = `
light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
`.split(/(\r\n)+/);

const testBagData = {
    'bright white': ['light red', 'dark orange'],
    'muted yellow': ['light red', 'dark orange'],
    'shiny gold': ['bright white', 'muted yellow'],
    'faded blue': ['muted yellow', 'dark olive', 'vibrant plum'],
    'dark olive': ['shiny gold'],
    'vibrant plum': ['shiny gold'],
    'dotted black': ['dark olive', 'vibrant plum'],
};

test('buildBagData builds a dict bags to their list of containers', () => {
    expect(buildBagData(testBagRules)).toEqual(testBagData);
});

test('getPossibleColors gets a list of all possible bag colors for a particular bag', () => {
    expect(getPossibleColors(testBagData, 'shiny gold', [])).toEqual([
        'bright white',
        'muted yellow',
        'light red',
        'dark orange',
    ]);
});

test('checkRules counts how many colors can hold my bag', () => {
    expect(checkRules(testBagRules)).toEqual(4);
});
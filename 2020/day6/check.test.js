const { checkCustoms, getAnswersCount, getUniqueAnswers } = require('./check');

const testAnswersList = `
abcx
abcy
abcz

abc

a
b
c

ab
ac

a
a
a
a

b
`.split(/(\r\n){2}/);

test('getAnswersCount gets a list of unique yes answers in a group', () => {
    expect(getUniqueAnswers(testAnswersList[0])).toEqual(['a','b','c','x','y','z']);
    expect(getUniqueAnswers(testAnswersList[3])).toEqual(['a','b','c']);
    expect(getUniqueAnswers(testAnswersList[4])).toEqual(['a']);
});

test('getAnswersCount gets a count of the unique yes answers in a group', () => {
    expect(getAnswersCount(testAnswersList[0])).toEqual(6);
    expect(getAnswersCount(testAnswersList[3])).toEqual(3);
    expect(getAnswersCount(testAnswersList[4])).toEqual(1);
});

test('checkCustoms gets a total count of unique yes answers', () => {
    expect(checkCustoms(testAnswersList)).toEqual(17);
});
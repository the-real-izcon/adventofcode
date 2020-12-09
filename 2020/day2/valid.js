
const getPasswordPolicies = passwords => passwords.map(password => {
    const [ num1, num2, char, pass ] = password.split(/[^(a-z0-9)]+/i);
    return { num1: +num1, num2: +num2, char, pass };
});

const isValid = ({ num1, num2, char, pass }, mode) => {
    if(mode == 'toboggan'){
        let count = 0;
        if(pass[num1-1] == char) count++;
        if(pass[num2-1] == char) count++;
        return count === 1;
    } else {
        const charRegex = new RegExp(char,"g");
        const charCount = (pass.match(charRegex) || []).length;
        return charCount >= num1 && charCount <= num2;
    }
};

const validate = (passwords, mode) => {
    let count = 0;
    const passwordPolicies = getPasswordPolicies(passwords);
    for(let i = 0; i < passwordPolicies.length; i++){
        if(isValid(passwordPolicies[i], mode)) count++;
    }

    return count;
};

module.exports = { getPasswordPolicies, isValid, validate };

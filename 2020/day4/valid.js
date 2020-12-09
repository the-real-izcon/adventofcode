const REQUIRED_FIELDS = {
    'byr': value => +value >= 1920 && +value <= 2002,
    'iyr': value => +value >= 2010 && +value <= 2020,
    'eyr': value => +value >= 2020 && +value <= 2030,
    'hgt': value => {
        if (value.length < 3) return false;
        const units = value.substring(value.length - 2);
        if (!['cm', 'in'].includes(units)) return false;
        const num = +(value.substring(0, value.length - 2));
        if (units == 'cm') return num >= 150 && num <= 193;
        if (units == 'in') return num >= 59 && num <= 76;
        return false;
    },
    'hcl': value => /^#([a-f0-9]{6})$/.test(value),
    'ecl': value => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value),
    'pid': value => /^([0-9]{9})$/.test(value),
    //'cid': value => false, // does not exist on North Pole Creds
}

const getAllPassportData = passports => passports.map(password => (
    password.split(/(\s)+/)
        .reduce((obj, passportField) => {
            const [field, value] = passportField.split(':');
            return {
                ...obj,
                [field]: value,
            };
        }, {})
));

const isValid = (passportData, validateValue) => {
    for (requiredKey in REQUIRED_FIELDS) {
        if (!(requiredKey in passportData)) return false;

        let valueIsValid = REQUIRED_FIELDS[requiredKey];
        let value = passportData[requiredKey];
        if (validateValue && !valueIsValid(value)) return false;
    }
    return true;
};

const validate = (passports, validateValue) => {
    let count = 0;
    const allPassportData = getAllPassportData(passports);
    for (let i = 0; i < allPassportData.length; i++) {
        if (isValid(allPassportData[i], validateValue)) count++;
    }

    return count;
};

module.exports = { REQUIRED_FIELDS, getAllPassportData, isValid, validate };

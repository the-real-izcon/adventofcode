const EXPECTED_SUM = 2020;

module.exports = {
    fix2: (report) => {
        for(let i = 0; i < report.length; i++){
            let item1 = report[i];
            let item2 = EXPECTED_SUM - item1;
    
            if(report.includes(item2)) return item1 * item2;
        }
        return 0;
    },
    fix3: (report) => {
        for(let i = 0; i < report.length; i++){
            let item1 = report[i];
            let sum = EXPECTED_SUM - item1;
            for(let j = i+1; j < report.length; j++){
                let item2 = report[j];
                let item3 = sum - item2;
        
                if(report.includes(item3)) return item1 * item2 * item3;
            }
        }
        return 0;
    },
};

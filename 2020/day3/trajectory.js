const TREE = '#';

const getSlopeMatrix = slope => slope.split(/[\r\n]+/).map(x=>x.split(''));

const countTrees = (slope, [xTraj, yTraj]) => {
    const slopeMatrix = getSlopeMatrix(slope);

    let count = 0;
    let x = xTraj;
    for(let y = yTraj; y < slopeMatrix.length; y += yTraj){
        let row = slopeMatrix[y];
        if(x >= row.length) x -= row.length;
        if(row[x] == TREE) count++;
        x += xTraj;
    }

    return count;
};

const getProbability = (slope, trajArray) => {
    let count = 1;
    for(let i = 0; i < trajArray.length; i++){
        count *= countTrees(slope, trajArray[i]);
    }

    return count;
};

module.exports = { countTrees, getProbability };

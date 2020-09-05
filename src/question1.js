function findMinimumTollCost(array) {
    let tolls = [];
    let skip = 0;

    for (let i = 0; i < array.length; i++) {
        if (skip === 1) {
            tolls.push(array[i]);
            skip = 0;
        } else if ((array[i] < array[i + 1])) {
            tolls.push(array[i]);
        } else {
            skip = skip + 1;
        }
    }

    const reducer = (accumulator, currentValue) => accumulator + currentValue
    const minimumTollCost = tolls.reduce(reducer, 0);
    return minimumTollCost;

}

console.log(findMinimumTollCost([5, 10, 3]));
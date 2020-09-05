function greaterNums(array1, array2) {
    let confirm = array1.every((item) => {
        return array2.includes(item);
    })

    let greaterNumber = [];
    if (confirm) {
        for (let i = 0; i < array1.length; i++) {
            for (let j = array2.indexOf(array1[i]); j < array2.length; j++) {
                if (array2[j] > array1[i]) {
                    greaterNumber.push(array2[j]);
                    break;
                }
            }
            if (greaterNumber.length === i) {
                greaterNumber.push(-1);
            }
        }
    }
    return greaterNumber;
}
console.log(greaterNums([4, 1, 2], [1, 3, 4, 2]));
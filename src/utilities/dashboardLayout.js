const arraySource = document.getElementsByClassName("makeStyles-note-23");
const numArray = [];
const test = Array.from(arraySource).map((item) => {
    return numArray.push(item);
});

// console.log(arraySource[1]);
console.log(numArray.keys());
// console.log(test);

export const fourColumnLayout = () => {
    let fourColsCounter = 0;
    const fourCols = numArray.map((num) => {
        return (fourColsCounter += 4);
    });
    // console.log(fourCols);

    const newArrayFourCols = { col1: [], col2: [], col3: [], col4: [] };

    numArray.map((num) => {
        if (fourCols.includes(num)) {
            return newArrayFourCols.col4.push(num);
        } else if (fourCols.includes(num + 1)) {
            return newArrayFourCols.col3.push(num);
        } else if (fourCols.includes(num + 2)) {
            return newArrayFourCols.col2.push(num);
        } else if (fourCols.includes(num + 3)) {
            return newArrayFourCols.col1.push(num);
        }
    });

    return newArrayFourCols;
};
//fourColumnLayout()*******

export const threeColumnLayout = () => {
    let threeColsCounter = 0;
    const threeCols = numArray.map((num) => {
        return (threeColsCounter += 3);
    });
    // console.log(threeCols);

    const newArrayThreeCols = { col1: [], col2: [], col3: [] };

    numArray.map((num) => {
        if (threeCols.includes(num)) {
            return newArrayThreeCols.col3.push(num);
        } else if (threeCols.includes(num + 1)) {
            return newArrayThreeCols.col2.push(num);
        } else if (threeCols.includes(num + 2)) {
            return newArrayThreeCols.col1.push(num);
        }
    });

    return newArrayThreeCols;
};
//threeColumnLayout()*****

export const twoColumnLayout = () => {
    let twoColsCounter = 0;
    const twoCols = numArray.map((num) => {
        return (twoColsCounter += 2);
    });
    // console.log(threeCols);

    const newArrayTwoCols = { col1: [], col2: [] };

    numArray.map((num) => {
        if (twoCols.includes(num)) {
            return newArrayTwoCols.col2.push(num);
        } else if (twoCols.includes(num + 1)) {
            return newArrayTwoCols.col1.push(num);
        }
    });

    return newArrayTwoCols;
};
//twoColumnLayout()*****

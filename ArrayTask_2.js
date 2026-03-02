// function for creating random numbers in an array
function createArray(userArr, min, max)
{
    for (let i = 0; i < userArr.length; i++)
    {
        userArr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

// function for show numbers in an array
function writingArray(userArr)
{
    console.log(`\nYour full array => ${userArr.join(", ")}`);
}

// function for search even numbers in an array
function filtreEvenNumbersInArray(userArr)
{
    const evenNumbersArray = [];

    for (let i = 0; i < userArr.length; i++)
    {
        if (userArr[i] % 2 === 0)
        {
            evenNumbersArray.push(userArr[i]);
        }
    }

    return evenNumbersArray;
}

// function for show even numbers in an array
function writingEvenNymbersArray(evenNumbersArray)
{
    console.log(`\nYour even numbers array => ${evenNumbersArray.join(", ")}`);
}

// function for search odd numbers in an array
function filtreOddNumbersInArray(userArr)
{
    const oddNumbersArray = [];

    for (let i = 0; i < userArr.length; i++)
    {
        if (userArr[i] % 2 !== 0)
        {
            oddNumbersArray.push(userArr[i]);
        }
    }

    return oddNumbersArray;
}

// function for show odd numbers in an array
function writingOddNumbersArray(oddNumbersArray)
{
    console.log(`\nYour odd numbers array => ${oddNumbersArray.join(", ")}`);
}

// function for find sum even numbers in an array
function findSumEvenNumbersInArray(evenNumbersArray)
{
    let sumInEvenNumbersArray = 0;

    for (let i = 0; i < evenNumbersArray.length; i++)
    {
        sumInEvenNumbersArray += evenNumbersArray[i];
    }

    return sumInEvenNumbersArray;
}

// function for writing sum even numbers in an array
function writingSumEvenNumbers(sumInEvenNumbersArray)
{
    console.log(`\nSum even numbers in an array =>${sumInEvenNumbersArray}`);
}

// function for find sum odd numbers in an array
function findSumOddNumbersInArray(oddNumbersArray)
{
    let sumInOddNumbersArray = 0;

    for (let i = 0; i < oddNumbersArray.length; i++)
    {
        sumInOddNumbersArray += oddNumbersArray[i];
    }

    return sumInOddNumbersArray;
}

// function for writing sum odd numbers in an array
function writingSumOddNumbers(sumInOddNumbersArray)
{
    console.log(`\nSum odd numbers in an array => ${sumInOddNumbersArray}`);
}

function main()
{
    const sizeArray = 20;
    const userArr = new Array(sizeArray);

    createArray(userArr, -100, 100);
    writingArray(userArr);

    const evenNumbersInArray = filtreEvenNumbersInArray(userArr);
    writingEvenNymbersArray(evenNumbersInArray);
    
    const oddNumbersInArray = filtreOddNumbersInArray(userArr);
    writingOddNumbersArray(oddNumbersInArray);

    const sumEvenNumbersInArray = findSumEvenNumbersInArray(evenNumbersInArray);
    writingSumEvenNumbers(sumEvenNumbersInArray);

    const sumOddNumbersInArray = findSumOddNumbersInArray(oddNumbersInArray);
    writingSumOddNumbers(sumOddNumbersInArray);
}

main();
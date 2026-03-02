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
    console.log(userArr.join(", "));
}

// function for search even numbers in an array
function filtreEvenNumbersInArray(userArr)
{
    const evenNumbersArray = [];

    for (let i = 0; i < userArr.length; i++)
    {
        if (userArr[i] % 2 === 0)
        {
            evenNumbersArray[i] = userArr[i];
        }
    }

    return evenNumbersArray;
}

// function for show even numbers in an array
function writingEvenNymbersArray()
{
    filtreEvenNumbersInArray();
    console.log(userArr.join(", "));
}

// function for search odd numbers in an array
function filtreOddNumbersInArray(userArr)
{
    const oddNumbersArray = [];

    for (let i = 0; i < userArr.length; i++)
    {
        if (userArr[i] % 2 !== 0)
        {
            oddNumbersArray[i] = userArr[i];
        }
    }

    return oddNumbersArray;
}

// function for show odd numbers in an array
function writingOddNumbersArray()
{
    filtreOddNumbersInArray();
    console.log(userArr.join(", "));
}
// function for find sum even numbers in an array
function findSumEvenNumbersInArray()
{

}

// function for find sum odd numbers in an array
function findSumOddNumbersInArray()
{

}

function main()
{
    const sizeArray = 20;
    const userArr = new Array(sizeArray);

    createArray(userArr, -100, 100);
    writingArray(userArr);
    filtreEvenNumbersInArray(userArr);
    filtreOddNumbersInArray(userArr);
    findSumEvenNumbersInArray(userArr);
    findSumOddNumbersInArray(userArr);
    writingEvenNymbersArray();
    writingOddNumbersArray();
}

main();
// function for creating random numbers in an array
function createArray(userArr, min, max)
{
    for(let i = 0; i < userArr.length; i++)
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
function filtreEvenNumbersInArray()
{

}

// function for search odd numbers in an array
function filtreOddNumbersInArray()
{
    
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
}

main();
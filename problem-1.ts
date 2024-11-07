{
// 

// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
// problem-1: solved
const sumArray = (numbers: number[]):number => {
    const sum: number = numbers.reduce((acc, element: number) => acc + element, 0)
    return sum;
}

// 
}


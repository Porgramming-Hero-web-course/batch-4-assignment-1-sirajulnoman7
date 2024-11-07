{
    // problem-2: solved

    // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

    const removeDuplicates = (numbers: number[]): number[] => {
        const removed = numbers.filter((number: number, index: number) => numbers.indexOf(number) === index)
        return removed
    }
}
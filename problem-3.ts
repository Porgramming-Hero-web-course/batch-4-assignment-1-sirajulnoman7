{
    //   problem-3 solved
    // Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

    const countWordOccurrences = (sentence: string, TypeScript: string): number => {

        const checkingWord = TypeScript.toLowerCase()
        const checkSentence = sentence.split(' ')
        const findOfSentence = checkSentence.filter(item => item === checkingWord)
        return findOfSentence.length

    }
}
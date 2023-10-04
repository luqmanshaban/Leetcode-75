function reverseWords(s: string): string {
    const words = s.split(/\s+/)

    const reverseWords = words.reverse()

    return reverseWords.join(' ').trim()
};

console.log(reverseWords("a good   example"));


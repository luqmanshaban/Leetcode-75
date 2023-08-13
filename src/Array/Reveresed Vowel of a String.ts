
/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


*/

function reverseVowels(s: string): string {
    let condition = 'AEIOUaeiou';
    let vowel: string[] = []
    let finalWord: string[] = []

    for(let i = 0; i < s.length; i ++) {
        if(condition.includes(s[i])) {
            vowel.push(s[i])
        }
        finalWord.push(s[i])
    }

    for(let i = 0; i < finalWord.length; i ++) {
        if(condition.includes(finalWord[i])) {
            finalWord[i] = vowel.pop() !;
        }
    }
    return finalWord.join('')
};

const result = reverseVowels('hello')
console.log(result);

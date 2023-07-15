/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/

function mergeAlternately(word1: string, word2: string): string {
    let wordString: string[] = [];
    let i: number = 0;
    let j: number = 0;
 
    while(i < word1.length && j < word2.length)  {
        wordString.push(word1[i])
        wordString.push(word2[j])
        i++;
        j++;
    }
    
    while(i < word1.length){
        wordString.push(word1[i]);
        i++;
    }
    while(j < word2.length){
        wordString.push(word2[j]);
        j++;
    }

    return wordString.join('');
};

let word1 = "abc", word2 = "pqr";

console.log(mergeAlternately(word1, word2));

function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxCandies = 0;

  for(let i = 0; i < candies.length; i ++) {
    if(candies[i] > maxCandies) maxCandies = candies[i]
  }

  let result = []

  for(let i = 0; i < candies.length; i ++) {
    if(candies[i] + extraCandies >= maxCandies)result.push(true)
    else result.push(false)
  }

  return result
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
const result = kidsWithCandies(candies, extraCandies);
console.log(result);

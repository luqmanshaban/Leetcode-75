function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let count = 0;

    for(let i = 0; i < flowerbed.length; i ++) {
        if(flowerbed[i] === 0 ){
            const isPreviousIndexEmpty = i === 0 || flowerbed[i - 1] === 0;
            const isNextIndexEmpty = i === flowerbed.length -1 || flowerbed[i + 1] === 0;

            if(isPreviousIndexEmpty && isNextIndexEmpty) {
                flowerbed[i] = 1;
                count ++
            }
        }
    }
    return count >= n
};

const flowerbed = [1,0,0,0,1];
const n = 1;
const result = canPlaceFlowers(flowerbed,n)
console.log(result);

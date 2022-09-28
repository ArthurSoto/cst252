function bigCheese(x){
    var results = x + 22 - 2;
    return results;
}

let array = [5, 6, 7, 8];

let theBigFunc = (number) => {
    return number + 1;
}

console.log(array.map(theBigFunc))

console.log(array.map(bigCheese))

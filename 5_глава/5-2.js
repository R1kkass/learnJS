function random(min, max){
    return min+ Math.random(min, max)*(min*max)
}

console.log(random(1,5));
console.log(random(1,5));

function randomInteger(min, max){
    let r = min+ Math.random(min, max)*(min*max)
    return Math.floor(r)
}

console.log(randomInteger(1,5));
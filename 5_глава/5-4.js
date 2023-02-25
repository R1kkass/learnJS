let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert(fruits.length); // 4 тк ссылка

const style = ["Джаз", "Блюз"];

style.push("Рок-н-ролл");
style[Math.floor((style.length - 1) / 2)] = "Классика";
console.log(style.shift());
style.unshift("Рэп", "Регги");

const res = [];
function sumInput() {
  let a = prompt("Значение", 0);
  console.log(a);
  if (a) {
    res.push(a);
    sumInput();
  } else {
    alert(res);
  }
  return res;
}

sumInput();

function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}

alert(getMaxSubSum([-1, 2, 3, -9]))

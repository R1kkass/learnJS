let i = 3

while (i) {
  alert(i--)
}// 1 выведет

let i2 = 0;
while (++i2 < 5) alert(i2) // от 1 до 4

let i3 = 0;
while (i3++ < 5) alert(i3) // от 1 до 5

for (let i = 0; i < 5; ++i) alert(i)

for (let i = 0; i < 5; i++) alert(i)
// в обоих случаях от 0 до 4

for(let i = 2 ;i<=10; i++){
    if (i % 2 == 0) {
        alert(i)
    }
}

let i4 = 0
while (i4 < 3) {
    alert( `number ${i}!` )
    i++
}

let i5;

do {
  i5=prompt("Введите число больше 100", 0)
} while (i5 <= 100 && i5)
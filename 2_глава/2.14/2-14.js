if(browser == 'Edge') {
    alert("You've got the Edge!")
} else if (browser == 'Firefox' || browser == 'Chrome' || browser == 'Safari' || browser == 'Opera') {
    alert( 'Okay we support these browsers too' )
} else {
    alert( 'We hope that this page looks ok!' )
}

const number = +prompt('Введите число от 0 до 3', '')
switch (number) {
  case 0:
    alert('Ввели число 0')
    break;
  case 1:
    alert('Ввели число 1')
    break
  case 2:
  case 3:
    alert('Ввели число 2 или 3')
    break
}
function sumSalaries(salaries) {
    let sum = 0
    for (let salary of Object.values(salaries)) {
      sum += salary
    }
    return sum
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
console.log(sumSalaries(salaries));

let user = {
    name: 'John',
    age: 30
};
  
console.log(count(user))

function count(arr){
    return Object.keys(arr).length
}

function getLastDayOfMonth(year, month){

  let date = new Date(year, month + 1, 0);
  
  return date.getDate();
}

console.log(getLastDayOfMonth(2012, 0))
console.log(getLastDayOfMonth(2012, 1))

function getSecondsToday() {
  let now = new Date()
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  let date = now - today
  return Math.round(date / 1000)
}
console.log(getSecondsToday())

function formatDate(date) {
  let Month = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let Ms = new Date() - date;
  let Sec = Math.round(Ms / 1000);
  let Min = Sec / 60;
  let Hour = Min / 60;

  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  Month = Month < 10 ? '0' + Month : Month;

  if (Sec < 1) {
    return 'сейчас';
  } else if (Min < 1) {
    return `${Sec} секунду назад`
  } else if (Hour < 1) {
    return `${Min} минуту назад`
  } else {
    return `${Month}.${month}.${year} ${hour}:${minutes}`
  }
}

console.log( formatDate(new Date(new Date - 86400 * 1000)) )
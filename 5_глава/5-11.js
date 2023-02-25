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
  let Month = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let hour = date.getHours()
  let minutes = date.getMinutes()
  let Ms = new Date() - date
  let Sec = Math.round(Ms / 1000)
  let Min = Sec / 60
  let Hour = Min / 60
  year = year.toString().slice(-2)

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

const date = new Date(2012, 1, 20, 3, 12)

console.log(date);

let date2 = new Date(2015, 0, 2)
function getDateAgo(date, d){
    date.setDate(date.getDate() - d)
    return date.getDate()
}
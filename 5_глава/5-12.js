const date = new Date(2012, 1, 20, 3, 12)

console.log(date);

let date2 = new Date(2015, 0, 2)
function getDateAgo(date, d){
    date.setDate(date.getDate() - d)
    return date.getDate()
}

function getLastDayOfMonth(year, month){

}
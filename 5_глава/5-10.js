let user = { name: "John", years: 30 };

let {name, years} = user
console.log(name);
console.log(years);

function topSalary(salaries){
    let m = 0
    let mName = null
    for(const [name, salary] of Object.entries(salaries)) {
      if (m < salary) {
        m = salary
        mName = name
      }
    }
  
    return mName
}

let user3 = {
  name: "Василий Иванович",
  age: 35
};

let user2 = JSON.parse(JSON.stringify(user3));

console.log(user2);
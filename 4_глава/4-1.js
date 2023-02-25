const user = Object.create({})
user.name='John'
user.surname="Smith"
user.name="Pete"
delete user.name
console.log(user);

function summator(obj){
    let sum=0
    for(let key in obj){
        sum=obj[key]+sum
    }
    return sum
}

console.log(summator({
    John: 100,
    Ann: 160,
    Pete: 130
  }))

function multiplyNumeric(obj){
    for(let key in obj){
        if(typeof(obj[key])=="number"){
            obj[key] = obj[key]*2
        }
    }
    return obj
}

console.log(multiplyNumeric( {
    width: 200,
    height: 300,
    title: "My menu"
  }))

  let schedule = {}

function isEmpty(obj){
    console.log(Object.keys(obj).length);
    if(Object.keys(obj).length==0){
        return true
    }
    return false
}

console.log(isEmpty(schedule));
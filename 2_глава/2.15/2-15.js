function checkAge(age) {
  return age > 18 ? true : confirm("Разрешили?")
}
function checkAge2(age) {
  return age > 18 || confirm("Разрешили?")
}

function min(a, b) {
    return a < b ? a : b
  }

function pow() {
    let x = prompt("x?", '')
    let n = prompt("n?", '')
    if(n<1){
        return `Степень ${n} не поддерживается`
    }else{
        return x**n
    }

    
}

alert(pow())
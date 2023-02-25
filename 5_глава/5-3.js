function ucFirst(str){
    return str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst('gfd'));

function checkSpam(str){
    let lowerCase = str.toLowerCase()

    return lowerCase.includes('viagra') || lowerCase.includes('xxx')
}
console.log(checkSpam('xxxx'));

function truncate(str, maxlength){
    if(str.length>maxlength){
        return str.slice(0,maxlength-1) + '...'
    }
    return str
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

function extractCurrencyValue(str){
    if(str.includes('$')){
        let r = str.split('').filter((key)=>{
            return key!='$'
        })
        return r.join('')
    }
}

console.log(extractCurrencyValue('120$'));
function camelize(str){
    let rr=[]

    for(let i = 0; i<str.length; i++){
        if(str[i]=='-'){
            rr.push(str[i])
            rr.push(str[i+1].toUpperCase())
        }else if(str[i-1]!='-'){
            rr.push(str[i])
        }
    }

    let r = rr.filter((key, index)=>{
        return key!='-'
    })
    return r.join('')
}

console.log(camelize('my-short-string'));

function filterRange(arr, a, b){
    let r =arr.filter((key)=>{
        return key>=a && key<=b
    })
    return r
}
let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4));

function copySorted(arr){
    let r = JSON.parse(JSON.stringify(arr)).sort()
    return r
}

let arr2 = ["HTML", "JavaScript", "CSS"];

console.log(copySorted(arr2));
console.log(arr2);

function Calculator(){
    return{
        methods: {
            "-": (a, b) => a - b,
            "+": (a, b) => a + b
        },
        calculating(str){
            let split = str.split(' ')
            let a = +split[0]
            let op = split[1]
            let b = +split[2]
            console.log(op);
            return this.methods[op](a, b);
        },
        addMethod(method, callback){
            this.methods[method] = callback 
            console.log(this.methods);
        }
    }
}

let powerCalc = new Calculator;
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculating("2 - 3");
console.log( result )

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = users.map((acc, index)=>{
       return acc.name
    })
console.log(names);


function shuffle(array) {
    array.sort(() => Math.random() - 0.5)
}
  
let arr3 = [1, 2, 3]
shuffle(arr3)
console.log(arr3)

let arr4 = [ vasya, petya, masha ];

function getAverageAge(arrr){
    
    let res = arrr.reduce((acc,item)=>{
        return acc+=item.age
    },0)
    return Math.ceil(res/(arr.length-1))
}

console.log(getAverageAge(arr4));

function unique(arr) {
    let set = new Set(arr)
    return [...set]
  }
  
  let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
  ];
  
  console.log( unique(strings) );

let users3 = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(user){
    let res = {}
    for(let i = 0; i<user.length; i++){
        res[user[i].id] = user[i]
    }
    return res
}

let usersById = groupById(users3);

console.log(usersById);
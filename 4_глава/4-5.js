let obj = {}

function A(){
    return obj
}

function B(){
    return obj
}

console.log(new B==new A);

function Accumulator(a){
    return{
        read(){
            a++
            return a
        }
    }
}

const accumulator = new Accumulator(1)

console.log(accumulator.read());
console.log(accumulator.read());

function Calculator(a,b){
    return{
        a:a,
        b:b,
        read(){
            this.a = +prompt('Число а:', 0)
            this.b = +prompt('Число b:', 0)
        },
        sum(){
            return this.a+this.b
        },
        mul(){
            return this.a*this.b
        }
    }
}

const calculator = new Calculator(1,2)

console.log(calculator.sum());
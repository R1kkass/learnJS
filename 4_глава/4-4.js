let ladder = {
    step: 0,
    up() {
      this.step++
      return this
    },
    down() {
      this.step--;
      return this
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
    }
  };

let calculator = {
    a:0,
    b:0,
    sum(){
        return this.a+this.b
    },
    mul(){
        return this.a*this.b
    },
    read(){
        this.a=+promt('Число а:', 0)
        this.b=+promt('Число б: ',0)
    }
}


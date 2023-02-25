let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
let weakMap = new WeakMap()
  
weakMap.set(messages[0], new Date(2023, 2, 3))

let mapMessages =new WeakSet()

mapMessages.add(messages[1])
mapMessages.add(messages[0])

messages.shift()
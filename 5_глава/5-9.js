function unique(arr) {
    let set = new Set(arr)
    return [...set]
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(values) )

  function aclean(arr) {
    let res = {};
  
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("")
      res[sorted] = arr[i];
    }
  
    return Object.values(res)
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log( aclean(arr) )

let map = new Map()

map.set("name", "John")

let keys = Array.from(map.keys())

keys.push("more")

console.log(keys)
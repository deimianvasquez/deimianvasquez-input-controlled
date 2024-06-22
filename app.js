let num = ["1", 2, 3]

let num2 = [10, 20, 30, ...num]

// let num3 = num.concat(num2)

console.log(num2)


let obj = {
    name: "deimian",
    apellido: "Vásquez"
}

let obj2 = {
    age: 16,
    ...obj
}

console.log(obj2)
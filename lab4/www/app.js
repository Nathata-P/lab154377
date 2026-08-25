// var fname = "Guff";
// var Lname = 'Burga'

// var num1 = 123
// var num2 = 45.978

// var bol = true



// if (bol) {
//     console.log("No")
// }

// //window.alert(fname)
// document.getElementById("divName").innerHTML = fname + ' ' + Lname
// console.log(fname + " 1 " + Lname)
// console.log(num1 + num2)
// console.log(fname + num1)
// console.log(arr[0] + " " + arr[1])

var arr = ["Guff", "Burga", 18, true]

console.log("arr", arr[1])

var stdObj = {
    fname: "Guff",
    lname: "Burga",
    id: 123456789
}
console.log("Obj", stdObj.fname)

//global variable
let x = 'Hello world out {let}'
console.log(x)

{
    let x = "OGOG but in let"
    console.log(x)
}

console.log(x)

function showName(name) {
    console.log("hey JUDE" + " " + name)
}

showName("Bellingham")

function addNumber(num) {
    let result = 1 + num
    return result
}

let res = addNumber(5)
console.log("Answer1+5:", res)

//arrow functional
let addNumber2 = (num) => {
    let result = 1 + num
    return result
}

let res2 = addNumber2(88)
console.log(res2)

// function xx(){}

var score = 99.99999999999
if (score <= 50) {
    console.log("F fucking retarded")
} else if (score <= 70) {
    console.log("B but still stupid idiot")
} else {
    console.log("A good jobs")
}


// for loop
for (let i = 1; i < 10; i += 2) {
    console.log(i)
}

var array = ["Guff", "Burga", 18, true]

array.forEach((x) => {
    console.log(x)
})

array.forEach(function (x) { console.log(x) })
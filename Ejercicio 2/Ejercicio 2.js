const array = []
let a = window.prompt("Introduce una palabra")
let b = window.prompt("Introduce una palabra")
let c = window.prompt("Introduce una palabra")
let mensaje =""
array.push(a)
array.push(b)
array.push(c)
for (let i = 1; i < array.length; i++) {
mensaje += `<p>${array[i]}</p>`
document.getElementById("div1").innerHTML = mensaje
}
mensaje += `<p>${array[0]}</p>`
document.getElementById("div1").innerHTML = mensaje
const array = []
let suma = 0
let media
let mensaje = ""
for (let i = 0; i < 20; i++) {
    array.push(parseInt(Math.random()*(36-18)+18))
}
console.log(array)
for (let i = 0; i < array.length; i++) {
    suma += array[i]
}
mensaje = `La edad media de la clase es ${suma / array.length}`
document.getElementById("div1").innerHTML = mensaje
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let suma = 0
let media
let mensaje = ""
for (let i = 0; i < array.length; i++) {
    suma += array[i]
}
mensaje = suma / array.length
document.getElementById("div1").innerHTML = mensaje
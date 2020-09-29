const array = []
let mensaje = ""
for (let i = 0; i < 10; i++) {
    array.push(window.prompt("Introduce un valor para añadir a la tabla"))
}
for (let i = 0; i < array.length; i++) {
    mensaje += `<p>${array[i]}</p>`
    document.getElementById("div1").innerHTML = mensaje
}
const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let num
let salida = "<p>La tabla al final queda:</p>"
let mensaje = ""
let i
do {
    
    num = parseInt(window.prompt("Escribe un valor entre 0 y 9"))
    if (num < 10) {
        mensaje += `<p>El número de la tabla seleccionado es: ${array[num]}</p>`
        document.getElementById("div1").innerHTML = mensaje
        array[num] = array[num] * 2
    }
} while (num < 10)


mensaje += salida
document.getElementById("div1").innerHTML = salida

for (i = 0; i < array.length; i++) {
    mensaje += `<p>${array[i]}</p>`
    document.getElementById("div1").innerHTML = mensaje
}

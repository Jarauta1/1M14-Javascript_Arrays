const array = []
let valor
let mensaje = ""
let num1
let num2
let num3
for (let i = 0; i < 3; i++) {
    valor = window.prompt("Introduce un valor")
    array.push(valor)
}
num1 = array[0]
num2 = array[1]
num3 = array[2]
if (num1 < num2) {
    if (num1 < num3) {
        mensaje += `<p>El más pequeño es ${num1}</p>`
        document.getElementById("div1").innerHTML = mensaje
    } else {
        mensaje += `<p>El más pequeño es ${num3}</p>`
        document.getElementById("div1").innerHTML = mensaje
    }
} else if (num2 < num3) {
    mensaje += `<p>El más pequeño es ${num2}</p>`
    document.getElementById("div1").innerHTML = mensaje
} else {
    mensaje += `<p>El más pequeño es ${num3}</p>`
    document.getElementById("div1").innerHTML = mensaje
}
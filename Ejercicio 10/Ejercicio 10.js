const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let num
let mensaje = ""

do {
    num = parseInt(window.prompt("Escribe un valor entre 0 y 10"))
    if (num < 11 && num > -1) {
        array[num] = array[num] + 1
        for (let i = 0; i < array.length; i++) {
            mensaje += `<p>${array[i]}</p>`
            document.getElementById("div1").innerHTML = mensaje
        }

    } else if (num > 10) {
        window.alert("Ese número es incorrecto")
    } else {
        for (let i = 0; i < array.length; i++) {
            mensaje += `<p>${i} - Su valor es ${array[i]}</p>`
            document.getElementById("div1").innerHTML = mensaje
        }
    }
} while (num > -1)




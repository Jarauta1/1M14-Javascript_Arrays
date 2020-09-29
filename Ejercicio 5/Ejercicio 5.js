const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
let num = parseInt(window.prompt("Introduzca el número de mes que desee"))
let mensaje = `<p>${meses[num-1]}</p>`
document.getElementById("div1").innerHTML = mensaje
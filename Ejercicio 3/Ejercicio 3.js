const array = []
let mensaje = ""
for (let i = 20; i > 10; i--) {
    array.push(i)
}
for (let i = 0; i < array.length; i++) {
    mensaje += `<p>${array[i]}</p>`
}
document.getElementById("div1").innerHTML = mensaje
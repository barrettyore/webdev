document.getElementById("greeting").addEventListener("click", function() {
    document.getElementById("greeting").innerHTML = "ouch why did you punch me"
})

document.getElementById("color").addEventListener("mouseover", function () {
    document.getElementById("color").style.backgroundColor = "red"
    document.getElementById("color").style.height = "500px"
    document.getElementById("color").style.width = "500px"
    document.getElementById("warning").innerHTML = "uh oh you made him mad HELP!!!!😨"
})

document.getElementById("color").addEventListener("mouseout", function () {
    document.getElementById("color").style.backgroundColor = "blue"
    document.getElementById("color").style.height = "200px"
    document.getElementById("color").style.width = "200px"
    document.getElementById("warning").innerHTML = "dont touch the square he is senstive ☻"
})

document.getElementById("copy").addEventListener("copy", function () {
    document.getElementById("copy").innerHTML = "I SAID I DONT WANT TO BE COPIED AGHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"
})

document.getElementById("wheel").addEventListener("wheel", function () {
    document.getElementById("wheel").innerHTML = "i dont feel to well"
})

document.getElementById("paste").addEventListener("paste", function () {
    document.getElementById("cheat").innerHTML = "hey no cheating"
})

window.addEventListener("resize", function () {
    document.getElementById("resize").innerHTML = "AGGHHHHH EARTH QUAKE"
})
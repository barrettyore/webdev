// hello
console.log("HELLO WORLD!")
const MyVar = "hello js!"
console.log(MyVar)
let favcolor = "blue"
console.log(favcolor)
// i like print better
function print(a) {
    console.log(a)
}
print("i refuse to use console.log")

MainPerson = {
    name: "mr java",
    age: 30,
    favcolor: "blue",

}

print(Mainperson.name)

foods = ["macncheese", "icecream", "rice"]
print(foods[1])
// try me java
const True = true
const False = false
const isAlive = True
print(isAlive)
const isDead = False
print(isDead)


function popUp(msg) {
    // alert("some one tell java"+ ~msg)
    alert(`some one tell java ${msg}`)
}

popUp("that im useing print()")
if (age >= 30 && age < 50){                                                                                                      
    alert("your about to be the past presient ov the being alive club ha ha")

}else if (age < 30){
    alert("BABY")
}else {
    alert("defikslkdjf;lkjwasd")
}


document.getElementById("title").innerHTML = `hello ${MyVar}`



const para = document.createElement("p")
document.getElementsByTagName("p").innerHTMl = "i was born from the depths of js"
document.getElementsByTagName("div1").appendChild(para)
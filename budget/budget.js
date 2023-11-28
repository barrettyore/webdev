// function calCircumfrence() {
//     radius = document.getElementById("radius").value
//     circumfrence = 2*Math.pi *radius
//     document.getElementById("circumfrence").innerHTML = `the circum ${circumfrence}`
//     console.log(`the circum ${calCircumfrence}`)

// }

function GO() {
    income = document.getElementById("income").value
    exp1 = document.getElementById("exp1").value
    exp2 = document.getElementById("exp2").value
    exp3 = document.getElementById("exp3").value
    exp4 = document.getElementById("exp4").value
    exp5 = document.getElementById("exp5").value
    exp6 = document.getElementById("exp6").value
    console.log(income)
    console.log(exp1)
    console.log(exp2)
    console.log(exp3)
    console.log(exp4)
    console.log(exp5)
    console.log(exp6)
    final = income-exp1-exp2-exp3-exp4-exp5-exp6
    console.log(final)
    if (final > 0) {
        console.log("postive")
        document.getElementById("output").innerHTML = `you have a postive net gain of ${final}`
    } else {
        console.log("negitive")
        document.getElementById("output").innerHTML = `you have a negitive net gain of ${final}`
    }
}
document.getElementById("click").addEventListener("click", function () {
    if(final>7000){
        document.getElementById("t5").style.display = "list-item"; // Change this line
        document.getElementById("t5").style.listStyleType = "disc"; // Add this line to show the bullet point
    }
})
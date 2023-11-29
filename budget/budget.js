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
    var ulElement = document.querySelector("#click + ul");

    if (final < 0 && final > -1000) {
        document.getElementById("click").innerHTML = "you're in the negative, but you're not far off from being in the positive, here are some tips to raise your net income";
        document.getElementById("t1").style.display = "list-item";
        document.getElementById("t1").style.listStyleType = "disc";
        document.getElementById("t2").style.display = "list-item";
        document.getElementById("t2").style.listStyleType = "disc";
        document.getElementById("t3").style.display = "list-item";
        document.getElementById("t3").style.listStyleType = "disc";
    } else if (final > 7000) {
        document.getElementById("click").innerHTML = "you're well in the positive, here are some tips to gain more";
        document.getElementById("t5").style.display = "list-item";
        document.getElementById("t5").style.listStyleType = "disc";
        document.getElementById("t4").style.display = "list-item";
        document.getElementById("t4").style.listStyleType = "disc";
    } else if (final > 3000 && final < 7000) {
        document.getElementById("click").innerHTML = "you're in a good range, here are some tips to manage your finances";
        document.getElementById("t4").style.display = "list-item";
        document.getElementById("t4").style.listStyleType = "disc";
    } else if (final > 1000 && final < 2999) {
        document.getElementById("click").innerHTML = "you're in the positive, but your net income is low, here are some tips to manage your finances";
        document.getElementById("t1").style.display = "list-item";
        document.getElementById("t1").style.listStyleType = "disc";
    } else if (final > 1 && final < 999) {
        document.getElementById("click").innerHTML = "you're in the positive, but you're barely scraping by, here are some tips to raise your net income";
        document.getElementById("t1").style.display = "list-item";
        document.getElementById("t1").style.listStyleType = "disc";
        document.getElementById("t2").style.display = "list-item";
        document.getElementById("t2").style.listStyleType = "disc";
    } else {
        document.getElementById("click").innerHTML = "you have a negative net gain, and need to gain net postive immediately here are some tips to improve your financial situation";
        document.getElementById("t1").style.display = "list-item";
        document.getElementById("t1").style.listStyleType = "disc";
        document.getElementById("t2").style.display = "list-item";
        document.getElementById("t2").style.listStyleType = "disc";
        document.getElementById("t3").style.display = "list-item";
        document.getElementById("t3").style.listStyleType = "disc";
        document.getElementById("t6").style.display = "list-item";
        document.getElementById("t6").style.listStyleType = "disc";
        document.getElementById("t7").style.display = "list-item";
        document.getElementById("t7").style.listStyleType = "disc";

    }

    // Always show the sibling <ul> element
    ulElement.style.display = "block";
});

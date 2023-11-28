function tellFortune() {
    numOfChildren = document.getElementById('children').value
    partnerName = document.getElementById('partner').value
    // location = document.getElementById('location').value
    jobTitle = document.getElementById('job').value

    document.getElementById("fortune").innerHTML = `you will be an ${jobTitle} and mariied to ${partnerName} with ${numOfChildren} kids`

}
function dog() {
    humanYears = document.getElementById("dog").value;
    dogAge = humanYears *7
    document.getElementById("age").innerHTML=`your dog is ${dogAge} in dog years`
}

function calculateSupply() {
    age = document.getElementById("current-age").value
    amountPerDay = document.getElementById("amount-per-day").value
    maxAge = 92
    amountPerDay = amountPerDay * 365.25
    totalAmount = (maxAge - age) * amountPerDay;
    document.getElementById("supply").innerHTML = `you will need ${totalAmount} to last you untill your ${maxAge}`
}

function calCircumfrence() {
    radius = document.getElementById("radius").value
    circumfrence = 2*Math.PI *radius
    document.getElementById("circumfrence").innerHTML = `the circum ${circumfrence}`
    console.log(`the circum ${calCircumfrence}`)

}
function celsuisToFahrenheit() {
    celsius = document.getElementById("c").value;
    fahrenheit = celsius * 9 / 5 + 32
    document.getElementById("fahrenheit").innerHTML = `${celsius}C is ${fahrenheit}F`
    console.log(`${celsuis}C is ${fahrenheit}F`)

}

function fahrenheitToCelsuis(fahrenhet) {
    celsuis = (fahrenhet - 32) * 5 / 9
    console.log(`${fahrenhet}F is ${celsuis}C`)
}



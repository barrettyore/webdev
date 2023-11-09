function tellFortune(numOfChildren, partnerName, location, jobTitle) {
    console.log(`you will be an ${jobTitle} in ${location} and mariied to ${partnerName} with ${numOfChildren} kids`)

}
function dog(humanYears) {
    dogAge = humanYears *7
    console.log(`dog is ${dogAge} in dog years`)
}

function calculateSupply(age, amountPerDay,item) {
    maxAge = 92
    amountPerDay = amountPerDay * 365.25
    totalAmount = (maxAge - age) * amountPerDay;
    console.log(`you will need ${totalAmount} ${item} to last you untill your ${maxAge}`)
}

function calCircumfrence(radius) {
    curcumfence = 2*Math.pi *radius
    console.log(`the circum ${calCircumfrence}`)

}
function celsuisToFahrenheit(celsuis) {
    fahrenheit = celsuis * 9 / 5 + 32
    console.log`${celsuis}C is ${fahrenheit}F`

}

function fahrenheitToCelsuis(fahrenhet) {
    celsuis = (fahrenhet - 32) * 5 / 9
    console.log(`${fahrenhet}F is ${celsuis}C`)
}



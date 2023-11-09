const var1 = "HELLO WORLD"
const var2 = "HELLO JAVASCRIPT"
const var3 = "lorem ipsum"
const var4 = "fun fact lorem is not a latin word lorem is short for delorem meaning pain delorem ipsum translates to THE PAIN"
const num1 = 13
const num2 = 54.6
const num3 = 78
const bool1 = true
const bool2 = false
const bool3 = true
// i really wanted to hit shift
const array1 = ["why","not","call it a","LIST"]
const array2 = [3,4,1]
const array3 = [true,false,true]
const obj1 = {
    "name": "barrett",
    "age": 15.5,
    "alive": false
}
const obj2 = {
    "car": "delorean",
    "manufacturer":"dmc",
    "model":"dmc12"
}
const obj3 = {
    "name":"hunt",
    "age":"unknown",
    "status":"working",
}
function replaceTag(tag,replaceWith) {
    document.getElementById(tag).innerHTML = replaceWith;
}

window.addEventListener('load', function() {
    // TXT 
    document.getElementById('var1').innerHTML = var1;
    document.getElementById('var2').innerHTML = var2;
    document.getElementById('var3').innerHTML = var3;
    // NUMS
    document.getElementById('num1').innerHTML = num1;
    document.getElementById('num2').innerHTML = num2;
    document.getElementById('num3').innerHTML = num3;
    // BOOLS
    document.getElementById('bool1').innerHTML = bool1;
    document.getElementById('bool2').innerHTML = bool2;
    document.getElementById('bool3').innerHTML = bool3;
    // ARRAYS
    document.getElementById('array1').innerHTML = array1[3];
    document.getElementById('array2').innerHTML = array2[0];
    document.getElementById('array3').innerHTML = array3[1];
    // OBJS
    document.getElementById('obj1').innerHTML = obj1.age;
    // the moment when i realsed .... i could function this
    replaceTag("obj2",obj2.car)
    replaceTag("obj3",obj3.status)
});

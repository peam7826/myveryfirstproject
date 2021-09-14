var inputnumber = prompt("กรุณาแทงหวย")
console.log(inputnumber)
document.getElementById("inputnumber").innerHTML = inputnumber
var lottonumber = Math.floor(Math.random()*100);
console.log(lottonumber)
document.getElementById("lottonumber").innerHTML = lottonumber
if (inputnumber == lottonumber) {
    alert("ยินดีด้วยคุณถูกหวย")
} else {
    alert("เสียใจด้วย คุณไม่ถูกหวย")
}
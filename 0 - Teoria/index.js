const txtn1 = document.querySelector("#n1")
const txtn2 = document.getElementById("n2")
const respuesta =document.getElementById("resp")
const btn = document.getElementById("calcular")

btn.addEventListener('click',calcular)

function calcular(){
    const op1 =parseFloat(txtn1.value) 
    const op2 =parseFloat(txtn2.value)
    let resp = op1 + op2
    respuesta.innerText = resp 
}

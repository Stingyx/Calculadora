const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button")


buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText=""
        }else if(item.id =="backspace"){
            let string = display.innerText.toString()
            display.innerText = string.substr(0,string.length-1)
        }else if(item.innerText !="" && item.id =="btn-equal"){
            display.innerText = eval(display.innerText)
        }else if(item.innerText =="" && item.id =="btn-equal"){
            display.innerText="Null"
            setTimeout(()=>{display.innerText=""},3000)
        }else{
            display.innerText+=item.id
        }
    }
})

const themeToggleBtn = document.querySelector(".theme-toggler")
const calculator = document.querySelector(".calculator")
const ToggleIcon = document.querySelector("toggler-icon")
let isDark = true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
    isDark = !isDark
}
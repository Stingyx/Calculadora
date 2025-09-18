const menuToggle = document.querySelector(".menuToggle")
const navigation = document.querySelector(".navigation")

menuToggle.onclick = function(){
    navigation.classList.toggle('open')
}

const list = document.querySelectorAll(".list")
function activarLink(){
    list.forEach((items)=>
        items.classList.remove('active'))
        this.classList.add('active')
}

list.forEach((items)=>
    items.addEventListener('click',activarLink)
)
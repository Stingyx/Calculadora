function toggleMenu(){
    const menuIcon = document.querySelector(".menuIcon")
    const navbar = document.getElementById("navbar")
    menuIcon.classList.toggle("active")
    navbar.classList.toggle("active")
}

const slideShow = document.getElementById("SlideShow")
const slides = slideShow.getElementsByTagName("video")
var index = 0
const slideShowText = document.getElementById("slideShowText")
const Text = slideShowText.getElementsByTagName("div")

function nextSlider(){
    slides[index].classList.remove('active')
    Text[index].classList.remove("active")
    index = (index+1)%slides.length
    slides[index].classList.add("active")
    Text[index].classList.add("active")
}

function prevSlider(){
    slides[index].classList.remove("active")
    Text[index].classList.remove("active")
    index = (index-1+ slides.length)%slides.length
    slides[index].classList.add("active")
    Text[index].classList.add("active")
}


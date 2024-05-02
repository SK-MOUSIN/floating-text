function breakText() {
var heading = document.querySelector("h1")
var headingText = document.querySelector(" h1").textContent
var splittedText = headingText.split("")

var clutter = ""
var halfLenght = splittedText.length/2
splittedText.forEach(function(elem, idx) {
    if(idx<halfLenght) {
        clutter += `<span class="a">${elem}</span>`
    }else {
        clutter += `<span class="b">${elem}</span>`
    }
})

heading.innerHTML = clutter
}

breakText()

gsap.from("h1 .a", {
    y:80,
    duration: .7,
    delay: 1,
    stagger: 0.15,
    opacity:0
})

gsap.from("h1 .b", {
    y:100,
    duration: .6,
    delay: 0.8,
    stagger: -0.15,
    opacity:0
})
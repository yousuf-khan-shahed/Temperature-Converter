const fahrenInput = document.querySelector("#fahren")
const celInput = document.querySelector("#cel")
const fahrenToCelBtn = document.querySelector(".btn1")
const celToFahrenBtn = document.querySelector(".btn2")
const result = document.querySelector("#result")


function fahrenToCel() {
    let fahrenValue = fahrenInput.value
    let celCalculation = (fahrenValue - 32) * (5/9)
    let celResult = fahrenValue + "  In Celcius =  " + celCalculation
    result.textContent = celResult
}

function celToFahren() {
    let celValue = celInput.value
    let fahrenCalc = (celValue * (9/5) + 32) 
    let fahrenResult = celValue + "  In Fahrenheit =  " + fahrenCalc
    result.textContent = fahrenResult
}


fahrenToCelBtn.addEventListener('click',fahrenToCel)
celToFahrenBtn.addEventListener('click',celToFahren)
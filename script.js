const convBtn = document.querySelector(".conv")
const resetBtn = document.querySelector(".reset")
const changeBtn = document.querySelector(".change")
const converterInput = document.querySelector("#converter")
const one = document.querySelector(".one")
const two = document.querySelector(".two")
const result = document.querySelector(".result")

const reverse = () => {
    if(one.textContent === "°C") {
    one.textContent = "°F"
    two.textContent = "°C"
    } else {
    one.textContent = "°C"
    two.textContent = "°F"
    }
}

const converterFnct = () => {
    if(one.textContent === "°C"){
        let fahrenheit = (converterInput.value * 1.8 + 32) + "°F"
    result.textContent = fahrenheit
    } else{
        let celsius = (converterInput.value -32)/ 1.8
        result.textContent = celsius + "°C"
    }
}

const resetFnct = () => {
    converterInput.value = ""
    result.textContent = ""
}

changeBtn.addEventListener("click", reverse)
convBtn.addEventListener("click", converterFnct)
resetBtn.addEventListener("click", resetFnct)
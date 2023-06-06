const form = document.querySelector('form')
const formContainer = document.querySelector('.form-container')
const resultContainer = document.querySelector('.result-container')
const weightInput = document.getElementById('weight')
const heightInput = document.getElementById('height')
const result = document.getElementById('result')
const againBtn = document.getElementById('again-btn')

let BMIvalue;

function calculateAgain() {
    formContainer.hidden = false
    resultContainer.hidden = true
}

function showResult() {
    formContainer.hidden = true
    resultContainer.hidden = false
    result.textContent = BMIvalue
}

//Collecting The Data From The Form
function collectData(e) {
    e.preventDefault()
    console.log(e)
    const weight = e.srcElement[0].value
    let height = e.srcElement[1].value
    height *= height
    console.log(weight)
    calculate(weight, height)
    weightInput.value = ''
    heightInput.value = ''
}

//Calculating The BMI Value
function calculate(weight, height) {
    BMIvalue = weight / height
    BMIvalue = BMIvalue.toFixed(2)
    console.log(BMIvalue)
    showResult()
}

//Event Listeners
form.addEventListener('submit', collectData)
againBtn.addEventListener('click', calculateAgain)
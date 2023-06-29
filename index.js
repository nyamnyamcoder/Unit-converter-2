/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById('number')

console.log(inputEl.value)

const convertEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")
const lengthNumber = 3.281
const volumeNumber = 0.264
const massNumber = 2.204

convertEl.addEventListener ("click", function(){
    // length conversion
    const metertofeet = inputEl.value * lengthNumber
    const feettometer = inputEl.value / lengthNumber

    lengthEl.textContent = `
    
    ${inputEl.value} meters = ${metertofeet.toFixed(3)} feet | ${inputEl.value} feet = ${feettometer.toFixed(3)} meters
    
    `

    // volume conversion
    const litertogallon = inputEl.value * volumeNumber
    const gallontoliter = inputEl.value / volumeNumber

    volumeEl.textContent = `
    
    ${inputEl.value} liters = ${litertogallon.toFixed(3)} gallons | ${inputEl.value} gallons = ${gallontoliter.toFixed(3)} liters
    
    `

    // mass conversion
    const kilogramtopound = inputEl.value * massNumber
    const poundtokilogram = inputEl.value / massNumber

    massEl.textContent = `
    
    ${inputEl.value} kilos = ${kilogramtopound.toFixed(3)} pounds | ${inputEl.value} pounds = ${poundtokilogram.toFixed(3)} kilos
    
    `

})
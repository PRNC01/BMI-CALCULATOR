const Age = document.getElementById('Age');
const Gender = document.getElementsByName('Gender');
const Height = document.getElementById('Height');
const Weight = document.getElementById('Weight');

const Bmi = document.getElementById('Bmi')
const report = document.getElementById('finalResult')

Age.value = 25;
Height.value = 175;
Weight.value = 60;
let Result = (((Height.value * Height.value) / 10000) / Weight.value).toFixed(2) + '';
let Output
Bmi.textContent = Result;

document.getElementById('Submit').addEventListener('click', (e) => {
    e.preventDefault()
    if (!Height.value) {
        Bmi.textContent = 'PLEASE ENTER YOUR HEIGHT';
    }
    if (!Weight.value) {
        Bmi.textContent = 'PLEASE ENTER YOUR WEIGHT';
    }
    if (Weight.value < 0) {
        Bmi.textContent = 'PLEASE ENTER YOUR VALID WEIGHT';
    }
    if (Height.value < 0) {
        Bmi.textContent = 'PLEASE ENTER YOUR VALID HEIGHT';
    }
    if (Height.value < 0 && Weight.value < 0) {
        Bmi.textContent = 'PLEASE ENTER YOUR VALID DETAIL';
    }
    if (Result <= 18.4) {
        Output = 'UNDERWEIGHT'
        report.textContent = Output;
    }
    if (Result <= 18.4 && Result >= 24.9) {
        Output = 'NORMAL'
        report.textContent = Output;
    }
    if (Result <= 25.0 && Result >= 39.9) {
        Output = 'OVERWEIGHT'
        report.textContent = Output;
    }
    if (Result >= 40.0) {
        Output = 'OBESE'
        report.textContent = Output;
    }
    if (Height.value && Height.value > 0 && Weight.value && Weight.value > 0) {
        Result = (Weight.value / ((Height.value * Height.value) / 10000)).toFixed(2) + '';
        Bmi.textContent = Result;
    }
})

document.getElementById('clear').addEventListener('click' , () => {
    Age.value = 25;
    Height.value = 175;
    Weight.value = 60;
})


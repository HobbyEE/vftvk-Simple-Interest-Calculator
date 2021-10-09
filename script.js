let sliderValue = document.getElementById('sliderValue');
let rate = document.getElementById('rate');
sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';

let amount = document.getElementById('principal');

function checkAmount() {
    if (amount.value <= 0) {
        alert('Enter a positive number')
        amount.focus();
    }
}

amount.addEventListener('change', checkAmount)

rate.addEventListener('mousemove', () => {
    sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';
})

rate.addEventListener('click', () => {
    sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';
})

function compute() {
    let principal = Number(document.getElementById('principal').value);
    let years = Number(document.getElementById('years').value);
    let interest = principal * years * rate.value / 100;
    console.log(interest)
    let resultText = document.getElementById('result')
    resultText.parentElement.classList.remove('hidden')
    resultText.innerHTML = `If you deposit <strong>${principal}</strong> <br/> at an interest rate of <strong>${rate.value}%</strong><br/> you will receive an amount of <strong>${interest}</strong><br/> in the year <strong>${new Date().getFullYear() + years}</strong>`
}

let sliderValue = document.getElementById('sliderValue');
let rate = document.getElementById('rate');
sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';



rate.addEventListener('mousemove', () => {
    sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';
})

rate.addEventListener('click', () => {
    sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';
})

function compute() {
    let principal = Number(document.getElementById('principal').value);
    let resultText = document.getElementById('result');
    resultText.innerHTML = '';
    resultText.parentElement.classList.add('hidden')
    if (principal <= 0) {
        alert('Enter a positive number')
        document.getElementById('principal').focus();
    }
    else {
        let years = Number(document.getElementById('years').value);
        let interest = principal * years * rate.value / 100;
        console.log(interest);
        resultText.parentElement.classList.remove('hidden')
        resultText.innerHTML = `If you deposit <mark>${principal}</mark> <br/> at an interest rate of <mark>${rate.value}%</mark><br/> you will receive an amount of <mark>${interest}</mark><br/> in the year <mark>${new Date().getFullYear() + years}</mark>`
    }
}

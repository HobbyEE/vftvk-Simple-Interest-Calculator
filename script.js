let sliderValue = document.getElementById('sliderValue');
let rate = document.getElementById('rate');
sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';

rate.addEventListener('mousemove', () => {
    sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';
})

rate.addEventListener('click', () => {
    sliderValue.innerHTML = Number(rate.value).toFixed(2) + ' %';
})

function compute()
{
    p = document.getElementById("principal").value;
    
}
        
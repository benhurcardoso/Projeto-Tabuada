// Seleção de elementos
const multiplicationform = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

// Funções

// Eventos
multiplicationform.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

     if(!multiplicationNumber || !multiplicatorNumber) return;

     console.log(multiplicationNumber, multiplicatorNumber);
})
// El gimnasio Bodytech, lo contrata para desarrollar una aplicación web que permita a sus usuarios calcular el índice de masa corporal basado en el formula:

// IMC = PESO/ALTURA * ALTURA

let inputWeight = document.getElementById("inputWeight");
let inputHeight = document.getElementById("inputHeight");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click",validateForm);

function validateForm() {
  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);

  if (weight == 0 && height == 0) {
    danger1.classList.add("text-danger");
    danger1.textContent = "Éste campo está vacío";
    danger2.classList.add("text-danger");
    danger2.textContent = "Éste campo está vacío";
    inputWeight.classList.add("is-invalid");
    inputHeight.classList.add("is-invalid");
  } else if (weight == 0) {
    danger1.classList.add("text-danger");
    danger1.textContent = "Éste campo está vacío";
    danger2.classList.remove("text-danger");
    danger2.textContent = "";
    inputWeight.classList.add("is-invalid");
    inputHeight.classList.remove("is-invalid");
  } else if (height == 0) {
    danger1.classList.remove("text-danger");
    danger1.textContent = "";
    danger2.classList.add("text-danger");
    danger2.textContent = "Éste campo está vacío";
    inputWeight.classList.remove("is-invalid");
    inputHeight.classList.add("is-invalid");
  } else if (weight < 0 && height < 0) {
    result.classList.add("text-danger");
    result.textContent = "Los datos ingresados no corresponden a un peso y altura real. Por favor verifique los datos.";
  }else{
    danger1.classList.remove("text-danger");
    danger1.textContent = "";
    danger2.classList.remove("text-danger");
    danger2.textContent = "";
    inputWeight.classList.remove("is-invalid");
    inputHeight.classList.remove("is-invalid");

    calculateIMC(weight, height);
  }
}

function calculateIMC(weight, height) {
  let bodyMassIndex = (weight / Math.pow(height, 2)).toFixed(2);

  if (bodyMassIndex < 18.5) {
    result.textContent = `IMC: ${bodyMassIndex}. Peso insuficiente`;
  } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 24.9) {
    result.textContent = `IMC: ${bodyMassIndex}. Peso normal`;
  } else if (bodyMassIndex >= 25 && bodyMassIndex <= 26.9) {
    result.textContent = `IMC: ${bodyMassIndex}. Sobrepeso grado I`;
  } else if (bodyMassIndex >= 17.5 && bodyMassIndex <= 29.9) {
    result.textContent = `IMC: ${bodyMassIndex}. Sobrepeso grado II (preobesidad)`;
  } else if (bodyMassIndex >= 30 && bodyMassIndex <= 34.9) {
    result.textContent = `IMC: ${bodyMassIndex}. Obesidad de tipo I`;
  } else if (bodyMassIndex >= 35 && bodyMassIndex <= 39.9) {
    result.textContent = `IMC: ${bodyMassIndex}. Obesidad de tipo II`;
  } else if (bodyMassIndex >= 40 && bodyMassIndex <= 49.9) {
    result.textContent = `IMC: ${bodyMassIndex}. Obesidad de tipo III (mórbida)`;
  } else if (bodyMassIndex > 50) {
    result.textContent = `IMC: ${bodyMassIndex}. Obesidad de tipo IV (extrema)`;
  } 
}

// Hacer un programa en JS para ayudar a un trabajador de Postobón a saber cuál será su sueldo semanal, se sabe que, si trabaja 40 horas o menos, se le pagará $20000 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25000 por hora. (Reciba el número de horas del empleado)
let inputName = document.getElementById("inputName");
let inputHours = document.getElementById("inputHours");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", validateForm);

function validateForm() {
  let name = inputName.value;
  let hours = Number(inputHours.value);

  if (name == "" && hours == 0) {
    danger1.classList.add("text-danger");
    danger1.textContent = "Éste campo está vacío";
    danger2.classList.add("text-danger");
    danger2.textContent = "Éste campo está vacío";
    inputName.classList.add("is-invalid");
    inputHours.classList.add("is-invalid");
  } else if (name == "") {
    danger1.classList.add("text-danger");
    danger1.textContent = "Éste campo está vacío";
    danger2.classList.remove("text-danger");
    danger2.textContent = "";
    inputName.classList.add("is-invalid");
    inputHours.classList.remove("is-invalid");
  } else if (hours == 0) {
    danger1.classList.remove("text-danger");
    danger1.textContent = "";
    danger2.classList.add("text-danger");
    danger2.textContent = "Éste campo está vacío";
    inputName.classList.remove("is-invalid");
    inputHours.classList.add("is-invalid");
  } else {
    danger1.classList.remove("text-danger");
    danger1.textContent = "";
    danger2.classList.remove("text-danger");
    danger2.textContent = "";
    inputName.classList.remove("is-invalid");
    inputHours.classList.remove("is-invalid");

    calculateSalary(hours, name);
  }
}

function calculateSalary(hours, name) {
  let totalSalary;
  let extraHours;
  let baseSalary;
  
  if (hours <= 40) {
    baseSalary = hours * 20000;
    extraHours = 0;
  }
  if (hours > 40) {
    extraHours = (hours - 40) * 25000;
    baseSalary = 40 * 20000;
  }

  const formatterPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });
  totalSalary = baseSalary + extraHours;
  result.textContent = `El salario de ${name} es ${formatterPeso.format(
    totalSalary
  )}`;
}

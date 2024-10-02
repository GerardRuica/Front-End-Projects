const radius = 70;
const circumference = 2 * Math.PI * radius;

function validateFields(fields) {
  var validForm = true;
  fields.forEach((field) => {
    var value = document.getElementById(field).value;
    var errorMessage = document.getElementById(`${field}-error`);
    if (value === "" || value === null || value === undefined) {
      errorMessage.textContent = "Este campo no puede estar vacío.";
      validForm = false;
    } else {
      errorMessage.textContent = null;
    }
  });

  return validForm;
}

function validateForm(fields) {
  var formValid = validateFields(fields);

  if (formValid) alert("Formulario enviado con éxito.");
}

function checkField(field) {
  const inputValue = document.getElementById(field).value;
  const task = document.getElementById(`task-${field}`);
  const errorMessage = document.getElementById(`${field}-error`);
  if (!(inputValue === "" || inputValue === null || inputValue === undefined)) {
    task.classList.add("strikethrough-text");
    errorMessage.textContent = null;
  } else {
    task.classList.remove("strikethrough-text");
    errorMessage.textContent = "Este campo no puede estar vacío.";
  }

  updateProgress();
}

function updateProgress() {
  const fields = ["name", "email", "password", "repeatPassword"];
  let completedFields = 0;

  fields.forEach((field) => {
    const value = document.getElementById(field).value.trim();
    if (value !== "") {
      completedFields++;
    }
  });

  const progressPercentage = (completedFields / fields.length) * 100;
  const percentageElement = document.querySelector(".percentage");
  percentageElement.textContent = `${Math.round(progressPercentage)}%`;

  const circle = document.querySelector(".circle");
  const offset = circumference - (progressPercentage / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

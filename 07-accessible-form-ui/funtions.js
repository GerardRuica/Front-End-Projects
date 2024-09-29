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

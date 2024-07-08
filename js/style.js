function handleGetFormData() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const zipCode = document.getElementById("zip-code").value;
  const status = document.getElementById("status").checked;

  return { name, email, city, zipCode, status };
}

function isNumber(input) {
  return !isNaN(input);
}

function checkboxIsChecked() {
  return document.getElementById("status").checked;
}

function validateFormData(obj) {
  return obj !== null && isNumber(obj.zipCode) && checkboxIsChecked();
}

function submit() {
  event.preventDefault();

  const formData = handleGetFormData();
  const isValid = validateFormData(formData);
  const warningDiv = document.getElementById("warning");
  if (!isValid) {
    warningDiv.textContent = "Periksa form anda sekali lagi";
  } else {
    warningDiv.textContent = "kamu sudah terdaftar";
    console.log("berhasil");
  }
}

const form = document.getElementById("myForm");
form.addEventListener("submit", submit);

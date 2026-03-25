document.getElementById("changeButton").addEventListener("click", function () {
  document.getElementById("output").innerHTML = "Button clicked successfully.";
});

document.getElementById("testForm").addEventListener("submit", function (event) {
  event.preventDefault();

  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let formMessage = document.getElementById("formMessage");

  nameInput.classList.remove("error");
  emailInput.classList.remove("error");

  if (nameInput.value === "" || emailInput.value === "") {
    formMessage.innerHTML = "Please complete all fields.";
    
    if (nameInput.value === "") {
      nameInput.classList.add("error");
    }

    if (emailInput.value === "") {
      emailInput.classList.add("error");
    }
  } else {
    formMessage.innerHTML = "Form submitted successfully.";
  }
});

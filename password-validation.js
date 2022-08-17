const passwordField = document.querySelector("#password");
const confirmPasswordField = document.querySelector("#confirm-password");
const errorText = document.querySelector(".non-matching");
const errorMessage = errorText.textContent;

passwordField.addEventListener("input", onInput);
confirmPasswordField.addEventListener("input", onInput);

function onInput(event) {
  if (
    passwordField.value === confirmPasswordField.value &&
    passwordField.value.length !== 0
  ) {
    removeUnmatched(passwordField);
    removeUnmatched(confirmPasswordField);
    errorText.textContent = "";
  } else {
    addUnmatched(passwordField);
    addUnmatched(confirmPasswordField);
    errorText.textContent = errorMessage;
  }
}

function addUnmatched(element) {
  if (!element.classList.contains("unmatched")) {
    element.classList.add("unmatched");
  }
}

function removeUnmatched(element) {
  if (element.classList.contains("unmatched")) {
    element.classList.remove("unmatched");
  }
}

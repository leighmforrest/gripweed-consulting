export function showError(input, message) {
  const error = input.parentElement.querySelector(".error-message");
  error.textContent = message;
  error.classList.remove("hidden");

  input.classList.remove("border-green-500", "border-gray-300");
  input.classList.add("border-red-500");
}

export function markValid(input) {
  const error = input.parentElement.querySelector(".error-message");
  error.textContent = "";
  error.classList.add("hidden");

  input.classList.remove("border-red-500", "border-gray-300");
  input.classList.add("border-green-500");
}

export function clearError(input) {
  const error = input.parentElement.querySelector(".error-message");
  error.textContent = "";
  error.classList.add("hidden");

  input.classList.remove("border-red-500", "border-gray-300");
}

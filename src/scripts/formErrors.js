export function showError(input, message) {
  if (!input) return;

  const errorMsg = input.parentElement?.querySelector(".error-message");

  // remove any previous colors/rings
  input.classList.remove(
    "border-gray-300",
    "border-green-500",
    "!border-green-500",
    "focus:border-vermillion",
    "focus:ring-vermillion",
    "!border-red-500",
    "!border-green-500",
    "!focus:border-green-500",
    "!focus:border-red-500",
    "focus:ring-2"
  );

  // add red border and red focus ring
  input.classList.add("border-2","!border-red-500","focus:!border-red-500","focus:!ring-red-500","focus:ring-2");

  if (errorMsg) {
    errorMsg.textContent = message;
    errorMsg.classList.remove("hidden");
  }

  input.setAttribute("aria-invalid", "true");
}

export function clearError(input) {
  if (!input) return;

  const errorMsg = input.parentElement?.querySelector(".error-message");

  input.classList.remove(
    "border-gray-300",
    "border-red-500",
    "!border-red-500",
    "focus:border-vermillion",
    "focus:ring-vermillion",
    "focus:!border-red-500",
    "focus:!ring-red-500",
    "focus:ring-2"
  );

  // add green border and green focus ring
  input.classList.add("border-2","!border-green-500","focus:!border-green-500","focus:!ring-green-500","focus:ring-2");

  if (errorMsg) {
    errorMsg.textContent = "";
    errorMsg.classList.add("hidden");
  }

  input.removeAttribute("aria-invalid");
}

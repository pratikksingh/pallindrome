const inputString = document.querySelector("#input-string");
const checkBtn = document.querySelector("#check-button");
const outputResult = document.querySelector("#output-result");

checkBtn.addEventListener("click", function pallindromeOrNot() {
  let inputStringValue = inputString.value;
  let separated = inputStringValue.split("");
  let requiredString = separated.reverse().join("");
  if (inputStringValue !== "" && inputStringValue === requiredString) {
    document.getElementById("output-result").innerText = "Pallindrome";
    return;
  } else if (inputStringValue !== "") {
    document.getElementById("output-result").innerText = "Not a Pallindrome";
  }
});

import "./styles.css";

const palindromeInput = document.querySelector("#text-input");
const checkPalindromeBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function isPalindrome() {
  result.innerHTML = "";
  result.className = "result";
  let inputString = palindromeInput.value;
  if (inputString == "") {
    alert("Please input a value");
  } else {
    const cleanInputString = inputString.replace(/[_\W]/gi, "").toLowerCase();
    const reversedString = Array.from(cleanInputString).reverse().join("");
    if (cleanInputString === reversedString) {
      result.innerHTML = `<p><strong>${inputString}</strong> is a palindrome.</p>`;
      result.classList.add("positive");
    } else {
      result.innerHTML = `<p><strong>${inputString}</strong> is not a palindrome.</p>`;
      result.classList.add("negative");
    }
  }
}

checkPalindromeBtn.addEventListener("click", () => {
  isPalindrome();
});

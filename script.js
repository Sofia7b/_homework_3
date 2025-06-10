// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
let yourNumber = prompt("Enter your five-digit number: ");
if (yourNumber.trim() === "" || yourNumber === null) {
  alert("You did not enter anything. Try entering a number.");
} else if (
  yourNumber.length !== 5 ||
  isNaN(yourNumber) ||
  yourNumber.includes(" ") ||
  yourNumber.includes("-") ||
  yourNumber.startsWith("0")
) {
  alert("You must enter exactly five digits, no spaces or letters!");
} else {
  let brokenNumber = yourNumber.split("").join(" ");
  alert(`Your number is ${yourNumber}`);
  alert(`Your number broken into digits: ${brokenNumber}`);
}

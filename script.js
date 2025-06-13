// Розкласти за цифрами п'ятизначне число і вивести у вихідному порядку через пробіл.
let yourNumber = prompt(
  "Enter your five-digit number (positive integers only):"
);
if (yourNumber === null || yourNumber.trim() === "") {
  alert("You did not enter anything. Try entering a number.");
} else if (yourNumber.length !== 5) {
  alert("You must enter exactly five digits");
} else if (yourNumber.includes("-") || yourNumber.includes("+")) {
  alert("Negative numbers or plus signs are not allowed!");
} else if (isNaN(yourNumber) || !Number.isInteger(Number(yourNumber))) {
  alert(
    "You must enter exactly five digits, without spaces, letters, or dots!"
  );
} else if (yourNumber.startsWith("0")) {
  alert("The number cannot start with zero!");
} else {
  let brokenNumber = yourNumber.split("").join(" ");
  alert(
    `Your number is ${yourNumber}\nYour number broken into digits: ${brokenNumber}`
  );
}

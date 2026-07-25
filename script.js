console.log("JavaScript is connected");

let birthYearInput = document.getElementById("birthYear");
let button = document.getElementById("calculateBtn");
let ageNumber = document.getElementById("ageNumber");

button.addEventListener("click", function () {

    let birthYear = birthYearInput.value;

    if (birthYear === "") {
        ageNumber.textContent = "Please enter your birth year.";
        return;
    }

    let age = 2026 - birthYear;

    ageNumber.textContent = age;

});
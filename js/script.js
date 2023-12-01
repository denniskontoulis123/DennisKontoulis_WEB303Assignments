document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const acceptTermsCheckbox = document.getElementById("accept-terms");
    const countrySelect = document.getElementById("country");
    const submitButton = document.getElementById("submit-button");
    const welcomeMessage = document.getElementById("welcome-message");

    // populate countries via array
    countries.forEach(function (country) {
        const option = document.createElement("option");
        option.value = country.code;
        option.textContent = country.name;
        countrySelect.appendChild(option);
    });

    // check all form reqs
    function checkFormRequirements() {
        const isUsernameValid = usernameInput.value.trim() !== "";
        const isPasswordValid = passwordInput.value.length >= 12;
        const doPasswordsMatch = passwordInput.value === confirmPasswordInput.value;
        const isTermsAccepted = acceptTermsCheckbox.checked;
        const isCountrySelected = countrySelect.value !== "";

        return isUsernameValid && isPasswordValid && doPasswordsMatch && isTermsAccepted && isCountrySelected;
    }

    // update submit btn state
    form.addEventListener("input", function () {
        submitButton.disabled = !checkFormRequirements();
    });

    // submit form
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // no redirect

        if (checkFormRequirements()) {
            const username = usernameInput.value;
            const selectedCountryCode = countrySelect.value;
            const selectedCountry = countries.find(country => country.code === selectedCountryCode);

            // welcome message
            welcomeMessage.textContent = `Welcome ${username}! The country code you selected is ${selectedCountryCode}`;
            welcomeMessage.style.display = "block";

            // clear form
            form.reset();
            submitButton.disabled = true;
        }
    });
});
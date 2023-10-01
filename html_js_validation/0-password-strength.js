// Retrieve the form and error message elements
const form = document.getElementById('passwordForm');
const error = document.getElementById('error');

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the entered password value
  const password = document.getElementById('password').value;

  // Validate the password
  if (validatePassword(password)) {
    form.submit(); // Allow form submission if the password is valid
  } else {
    error.textContent = 'Password does not meet the criteria.'; // Display error message
  }
});

// Function to validate the password
function validatePassword(password) {
  // Define the password criteria using regular expressions
  const lengthRegex = /.{8,}/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const numericRegex = /[0-9]/;
  const specialCharRegex = /[!@#$%^&*]/;

  // Check if the password meets all the criteria
  return (
    lengthRegex.test(password) &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    numericRegex.test(password) &&
    specialCharRegex.test(password)
  );
}
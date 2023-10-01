// Retrieve the form and error message elements
const form = document.getElementById('emailForm');
const error = document.getElementById('error');

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Retrieve the entered email value
  const email = document.getElementById('email').value;

  // Validate the email
  if (validateEmail(email)) {
    form.submit(); // Allow form submission if the email is valid
  } else {
    error.textContent = 'Please enter a valid email address.'; // Display error message
  }
});

// Function to validate the email
function validateEmail(email) {
  // Define the email format using a regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the format
  return emailRegex.test(email);
}
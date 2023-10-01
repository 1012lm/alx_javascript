// Retrieve the form element
const form = document.getElementById('submitForm');

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting
  handleFormSubmit();
});

// Function to handle the form submission
function handleFormSubmit() {
  // Retrieve the values entered in the form fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Perform validation
  if (name.trim() === '' || email.trim() === '') {
    // Display error message if required fields are empty
    displayErrorMessage('Please fill in all required fields.');
  } else {
    // Display success message if form submission is successful
    displaySuccessMessage('Form submitted successfully!');
    form.reset(); // Reset the form after successful submission
  }
}

// Function to display an error message
function displayErrorMessage(message) {
  const errorElement = document.createElement('p');
  errorElement.style.color = 'red';
  errorElement.textContent = message;

  const formContainer = document.getElementById('submitForm');
  formContainer.appendChild(errorElement);
}

// Function to display a success message
function displaySuccessMessage(message) {
  const successElement = document.createElement('p');
  successElement.style.color = 'green';
  successElement.textContent = message;

  const formContainer = document.getElementById('submitForm');
  formContainer.appendChild(successElement);
}
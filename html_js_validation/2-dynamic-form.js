// Retrieve the form, dropdown menu, and input container elements
const form = document.getElementById('dynamicForm');
const numFieldsSelect = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');

// Add an event listener for the dropdown menu change
numFieldsSelect.addEventListener('change', function () {
  const numFields = parseInt(numFieldsSelect.value);
  generateInputFields(numFields);
});

// Add an event listener for form submission
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting
  validateForm();
});

// Function to generate the specified number of text input fields
function generateInputFields(numFields) {
  inputContainer.innerHTML = ''; // Clear the input container

  for (let i = 1; i <= numFields; i++) {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.name = `field${i}`;
    inputField.placeholder = `Field ${i}`;
    inputContainer.appendChild(inputField);
  }
}

// Function to validate the form before submission
function validateForm() {
  const inputFields = inputContainer.getElementsByTagName('input');

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value.trim() === '') {
      alert('Please fill in all fields.'); // Display error message
      return;
    }
  }

  form.submit(); // Allow form submission if all fields are filled
}
 window.onload = function() {
    // Get elements by their IDs
    const input1 = document.getElementById('Addition-1');
    const input2 = document.getElementById('Addition-2');
    const result = document.getElementById('Addition-Result');
    const button = document.getElementById('AdditionSubmitButton');

    // Add click event listener to the button
    button.addEventListener('click', function() {
      // Convert input values to numbers
      const num1 = parseFloat(input1.value);
      const num2 = parseFloat(input2.value);

      // Check if inputs are valid numbers
      if (isNaN(num1) || isNaN(num2)) {
        result.textContent = 'Please enter valid numbers.';
      } else {
        // Display the result
        result.textContent = ` ${num1 + num2}`;
      }
    });
  };
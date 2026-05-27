document.getElementById('generateBtn').addEventListener('click', function() {
    const minInput = document.getElementById('min').value;
    const maxInput = document.getElementById('max').value;
    const resultDisplay = document.getElementById('result');
    const errorDisplay = document.getElementById('error-message');

    // Clear previous errors and reset result display temporarily
    errorDisplay.textContent = '';
    
    // Parse inputs strictly as integers
    const min = parseInt(minInput, 10);
    const max = parseInt(maxInput, 10);

    // --- Validation Checks ---
    
    // 1. Check if inputs are actual numbers
    if (isNaN(min) || isNaN(max)) {
        errorDisplay.textContent = 'Please enter valid numbers.';
        return;
    }

    // 2. Check if numbers are positive integers
    if (min < 1 || max < 1) {
        errorDisplay.textContent = 'Please enter positive integers only (1 or greater).';
        return;
    }

    // 3. Check if the range makes logical sense
    if (min > max) {
        errorDisplay.textContent = 'The "From" number cannot be larger than the "To" number.';
        return;
    }

    // --- Core Logic ---
    
    // Calculate the random number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Display the result
    resultDisplay.textContent = randomNumber;
});
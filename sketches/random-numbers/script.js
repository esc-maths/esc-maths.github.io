// UI Elements
const modeRadios = document.querySelectorAll('input[name="mode"]');
const rangeInputs = document.getElementById('range-inputs');
const setInputs = document.getElementById('set-inputs');
const generateBtn = document.getElementById('generateBtn');
const resultDisplay = document.getElementById('result');
const errorDisplay = document.getElementById('error-message');

// Toggle between Range and Set modes
modeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        errorDisplay.textContent = ''; // Clear errors on switch
        if (e.target.value === 'range') {
            rangeInputs.classList.remove('hidden');
            setInputs.classList.add('hidden');
        } else {
            rangeInputs.classList.add('hidden');
            setInputs.classList.remove('hidden');
        }
    });
});

// Generate Number Logic
generateBtn.addEventListener('click', function() {
    errorDisplay.textContent = ''; // Reset error state
    
    // Determine which mode is currently active
    const activeMode = document.querySelector('input[name="mode"]:checked').value;
    let randomNumber = null;

    if (activeMode === 'range') {
        // --- RANGE MODE LOGIC ---
        const minInput = document.getElementById('min').value;
        const maxInput = document.getElementById('max').value;
        
        const min = parseInt(minInput, 10);
        const max = parseInt(maxInput, 10);

        if (isNaN(min) || isNaN(max)) {
            errorDisplay.textContent = 'Please enter valid numbers.';
            return;
        }
        if (min < 1 || max < 1) {
            errorDisplay.textContent = 'Please enter positive integers only (1 or greater).';
            return;
        }
        if (min > max) {
            errorDisplay.textContent = 'The "From" number cannot be larger than the "To" number.';
            return;
        }

        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    } else if (activeMode === 'set') {
        // --- SET MODE LOGIC ---
        const setInputStr = document.getElementById('number-set').value;
        
        // Split by comma, remove whitespace, and filter out empty entries
        const stringParts = setInputStr.split(',').map(item => item.trim()).filter(item => item !== '');
        
        if (stringParts.length === 0) {
            errorDisplay.textContent = 'Please enter at least one number.';
            return;
        }

        // Convert strings to integers
        const numbersArray = stringParts.map(part => parseInt(part, 10));

        // Validate the array contains only positive integers
        for (let i = 0; i < numbersArray.length; i++) {
            if (isNaN(numbersArray[i]) || numbersArray[i] < 1) {
                errorDisplay.textContent = `"${stringParts[i]}" is invalid. Please use only positive integers separated by commas.`;
                return;
            }
        }

        // Pick a random index from the array
        const randomIndex = Math.floor(Math.random() * numbersArray.length);
        randomNumber = numbersArray[randomIndex];
    }

    // Display the final result
    if (randomNumber !== null) {
        resultDisplay.textContent = randomNumber;
    }
});
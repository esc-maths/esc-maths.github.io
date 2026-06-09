const Q = {
    0:   [1, 2, 3, 4, 5, 6, 7, 8, 10],      // T8
    10:  [1, 2, 4, 5, 6, 7, 9],      // E1
    20:  [1, 2, 3, 4, 5, 6],      // E2
    30:  [0, 1, 2, 3, 4, 7],      // E3
    40:  [1, 2, 4, 5, 7],      // E4
    50:  [1, 2, 3],      // E5
    60:  [3, 7],            // E6
    70:  [1, 2, 4],         // E7
    80:  [1, 2, 5, 7],         // E8
    90:  [2, 3, 4, 5, 6, 10],     // E9
    100: [1, 3]          // E10
};

const electiveNames = {
    0: "T8 Real Integrals",
    10: "E1 Fourier",   // Fourier integrals
    20: "E2 Inverse Laplace",   // Inverse Laplace
    30: "E3 Assorted integrals",   // Assorted real integrals
    40: "E4 Laplace 1",   // Laplace 1
    50: "E5 Laplace 2",   // Laplace 2
    60: "E6 Infinite series",   // Infinite series
    70: "E7 Riemann ζ function",   // Riemann zeta function
    80: "E8 Analysis 1",   // Analysis 1
    90: "E9 Analysis 2",   // Analysis 2
    100: "E10 Analysis 3"  // Analysis 3
};

const electivesDiv = document.getElementById("electives");
const genBtn = document.getElementById("genBtn");
const resetBtn = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");
const warning = document.getElementById("warning");

// Initialize checkboxes
Object.entries(electiveNames).forEach(([value, label]) => {
    electivesDiv.innerHTML += `
        <label>
            <input type="checkbox" value="${value}">
            ${label}
        </label>
    `;
});

function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function generateQuestion() {
    // 1. Get ONLY the checked electives
    const selected = [...document.querySelectorAll("input:checked")]
        .map(cb => Number(cb.value));

    warning.textContent = "";

    // 2. Guard rail: If nothing is checked, warn the user
    if (selected.length === 0) {
        warning.textContent = "❌ Please select at least one elective! 🤔";
        return;
    }

    // 3. Roll the random conversation topic 
    const topics = [1, 2, 4, 5, 6, 7, 8, 9];
    const conversation = topics[Math.floor(Math.random() * topics.length)];
    
    // 4. Pick randomly ONLY from the user's selection
    const elective = randomChoice(selected); 
    // const chosenElectiveName = electiveNames[elective];
    
    // 5. Calculate the problem number
    const specificProblemNum = randomChoice(Q[elective]);
    const problem = elective + specificProblemNum;

    // 6. Update the UI
    document.getElementById("topic").textContent = `Conversation Topic ${conversation}`;
    document.getElementById("problem").textContent = `Problem ${problem}`;

    // UI Visibility
    resultDiv.style.display = "block";
    resetBtn.style.display = "block";
    genBtn.style.display = "none";
}

function resetApp() {
    // Clear checkboxes
    document.querySelectorAll("input:checked").forEach(checkBox => checkBox.checked = false);
    
    // Reset UI visibility
    resultDiv.style.display = "none";
    resetBtn.style.display = "none";
    genBtn.style.display = "block";
    warning.textContent = "";
}
const Q = {
    0:   [3, 5, 6, 7],      // T8
    10:  [2, 4, 6, 9],      // E1
    20:  [1, 3, 4, 7],         // E2
    30:  [2, 4, 6, 7],      // E3
    40:  [2, 4, 5, 7],      // E4
    50:  [1, 2, 3, 4],      // E5
    60:  [3, 7],            // E6
    70:  [1, 2, 4],         // E7
    80:  [2, 7, 9],         // E8
    90:  [2, 4, 9, 10],     // E9
    100: [1, 5, 8]          // E10
};

const electiveNames = {
    0: "T8",
    10: "E1",   // Fourier integrals
    20: "E2",   // Inverse Laplace
    30: "E3",   // Assorted real integrals
    40: "E4",   // Laplace 1
    50: "E5",   // Laplace 2
    60: "E6",   // Infinite series
    70: "E7",   // Riemann zeta function
    80: "E8",   // Analysis 1
    90: "E9",   // Analysis 2
    100: "E10"  // Analysis 3
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
    const selected = [...document.querySelectorAll("input:checked")]
        .map(cb => Number(cb.value));

    warning.textContent = "";

    if (selected.length === 0) {
        warning.textContent = "❌ Please select at least one elective! 🤔";
        return;
    }

    const possibleElectives = [0, ...selected];

    // Keep the topic logic as is (for 1-9)
    const conversation = Math.floor(Math.random() * 9) + 1;
    const elective = randomChoice(possibleElectives);
    const problem = elective + randomChoice(Q[elective]);

    document.getElementById("topic").textContent = `Conversation Topic ${conversation}`;
    document.getElementById("problem").textContent = `Problem ${problem}`;

    // UI Updates
    resultDiv.style.display = "block";
    resetBtn.style.display = "block";
    genBtn.style.display = "none";
}

function resetApp() {
    // Clear checkboxes
    document.querySelectorAll("input:checked").forEach(cb => cb.checked = false);
    
    // Reset UI visibility
    resultDiv.style.display = "none";
    resetBtn.style.display = "none";
    genBtn.style.display = "block";
    warning.textContent = "";
}
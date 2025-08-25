function normalizeMatrix() {
    const input = document.getElementById("matrixInput").value.trim();
    if (!input) return;

    const rows = input.split(/\n/).map(r => r.trim().split(/[\s,]+/).map(Number));
    const m = rows.length;
    const n = rows[0].length;

    if (m > 20 || n > 20) {
        alert("Matrix size must be at most 20x20");
        return;
    }
    if (rows.some(r => r.length !== n)) {
        alert("All rows must have the same number of columns");
        return;
    }

    // Normalize columns
    const normalized = Array.from({ length: m }, () => Array(n).fill(0));
    for (let j = 0; j < n; j++) {
        let norm = 0;
        for (let i = 0; i < m; i++) norm += rows[i][j] ** 2;
        norm = Math.sqrt(norm);
        for (let i = 0; i < m; i++) normalized[i][j] = norm === 0 ? 0 : rows[i][j] / norm;
    }

    // LaTeX output
    let latex = "\\begin{bmatrix}";
    for (let i = 0; i < m; i++) {
        latex += normalized[i].map(v => v.toFixed(4)).join(" & ");
        if (i < m - 1) latex += " \\\\ ";
    }
    latex += "\\end{bmatrix}";
    document.getElementById("matrixOutput").style.display = 'block';
    document.getElementById("matrixOutput").innerHTML = `Normalized Matrix:<br>$$${latex}$$`;
    MathJax.typeset();

    // Plain text output
    const plainText = normalized.map(row => row.map(v => v.toFixed(4)).join("\t")).join("\n");
    // document.getElementById("matrixTextOutput").textContent = plainText;

    // Generate code snippets
    const pythonCode =
        `import numpy as np

A = np.array(${JSON.stringify(rows)})
norms = np.linalg.norm(A, axis=0)
A_normalized = A / norms
print(A_normalized)`;

    const jsCode =
        `let A = ${JSON.stringify(rows)};
let m = A.length;
let n = A[0].length;
let normalized = Array.from({ length: m }, () => Array(n).fill(0));

for (let j = 0; j < n; j++) {
  let norm = 0;
  for (let i = 0; i < m; i++) norm += A[i][j] ** 2;
  norm = Math.sqrt(norm);
  for (let i = 0; i < m; i++) normalized[i][j] = norm === 0 ? 0 : A[i][j] / norm;
}
console.log(normalized);`;

    const octaveCode =
        `% Input matrix
A = [${rows.map(r => r.join(" ")).join("; ")}];

% Compute column norms
norms = sqrt(sum(A.^2, 1));

% Normalize each column
A_normalized = A ./ norms;

% Display result
disp('Normalized matrix:');
disp(A_normalized);`;

    // Output
    document.getElementById("codeOutput").innerHTML = `
        <div class="code-block">
          <h3>Plain text</h3>
          <pre>${plainText}</pre>
        </div>
        <div class="code-block">
          <h3>Python</h3>
          <pre>${pythonCode}</pre>
        </div>
        <div class="code-block">
          <h3>JavaScript</h3>
          <pre>${jsCode}</pre>
        </div>
        <div class="code-block">
          <h3>Octave</h3>
          <pre>${octaveCode}</pre>
        </div>
      `;
}

function clearOutputs() {
    document.getElementById("matrixOutput").style.display = 'none';
    document.getElementById("matrixOutput").innerHTML = '';
    document.getElementById("codeOutput").innerHTML = '';
}
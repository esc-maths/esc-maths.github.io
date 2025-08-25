function normalizeMatrix() {
      const input = document.getElementById("matrixInput").value.trim();
      if (!input) return;

      const rows = input.split(/\n/).map(r => r.trim().split(/[\s,]+/).map(Number));
      const n = rows.length;
      if (n > 20 || rows.some(r => r.length !== n)) {
        alert("Matrix must be square with max size 20x20");
        return;
      }

      // Normalize columns
      const normalized = Array.from({ length: n }, () => Array(n).fill(0));
      for (let j = 0; j < n; j++) {
        let norm = 0;
        for (let i = 0; i < n; i++) norm += rows[i][j] ** 2;
        norm = Math.sqrt(norm);
        for (let i = 0; i < n; i++) normalized[i][j] = norm === 0 ? 0 : rows[i][j] / norm;
      }

      // LaTeX output
      let latex = "\\begin{bmatrix}";
      for (let i = 0; i < n; i++) {
        latex += normalized[i].map(v => v.toFixed(4)).join(" & ");
        if (i < n - 1) latex += " \\\\ ";
      }
      latex += "\\end{bmatrix}";
      document.getElementById("matrixOutput").innerHTML = `Normalized Matrix:<br>$$${latex}$$`;
      MathJax.typeset();

      // Generate code snippets
      const pythonCode =
        `import numpy as np

A = np.array(${JSON.stringify(rows)})
norms = np.linalg.norm(A, axis=0)
A_normalized = A / norms
print(A_normalized)`;

      const jsCode =
        `let A = ${JSON.stringify(rows)};
let n = A.length;
let normalized = Array.from({ length: n }, () => Array(n).fill(0));

for (let j = 0; j < n; j++) {
  let norm = 0;
  for (let i = 0; i < n; i++) norm += A[i][j] ** 2;
  norm = Math.sqrt(norm);
  for (let i = 0; i < n; i++) normalized[i][j] = norm === 0 ? 0 : A[i][j] / norm;
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
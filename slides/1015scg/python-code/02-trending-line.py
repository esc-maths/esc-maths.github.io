import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# URL of the CSV file
url = "https://esc-maths.github.io/assets/data-sets/decay3.csv"

# Read CSV
df = pd.read_csv(url)

# Convert first two columns to numeric
x = pd.to_numeric(df.iloc[:, 0], errors="coerce")
y = pd.to_numeric(df.iloc[:, 1], errors="coerce")

# Remove invalid or non-positive values (log requires y > 0)
mask = (x.notna()) & (y.notna()) & (y > 0)
x = x[mask].values
y = y[mask].values

# ----- Exponential fit -----
# Linearise: ln(y) = ln(A) + kx
lny = np.log(y)

# Least-squares linear fit
k, lnA = np.polyfit(x, lny, 1)
A = np.exp(lnA)

# Fitted curve
y_fit = A * np.exp(k * x)

# ----- R^2 calculation -----
ss_res = np.sum((y - y_fit) ** 2)
ss_tot = np.sum((y - np.mean(y)) ** 2)
r_squared = 1 - ss_res / ss_tot

# ----- Plot -----
plt.figure(figsize=(6, 4))
plt.scatter(x, y, s=40, alpha=0.7, label="Data")
plt.plot(x, y_fit, linewidth=2, label="Exponential fit")

plt.xlabel(df.columns[0])
plt.ylabel(df.columns[1])
plt.title("Exponential decay fit")
plt.legend()
plt.grid(True)
plt.show()

# ----- Output results -----
print(f"Exponential model: y = {A:.3f} * exp({k:.3f} x)")
print(f"R^2 = {r_squared:.4f}")

t0 = 0
y_at_0 = A * np.exp(k * t0)

print(f"y(0) = {y_at_0:.3f}")
print(f"Decay rate = {k:.3f}")

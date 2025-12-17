import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# -----------------------------
# Load data
# -----------------------------
url = "https://esc-maths.github.io/assets/data-sets/decay3.csv"
df = pd.read_csv(url)

t = pd.to_numeric(df.iloc[:, 0], errors="coerce")
y = pd.to_numeric(df.iloc[:, 1], errors="coerce")

# Valid data only (log requires y > 0)
mask = (t.notna()) & (y.notna()) & (y > 0)
t = t[mask].values
y = y[mask].values

# -----------------------------
# Linearisation
# -----------------------------
lny = np.log(y)

# Linear regression using least squares
k, lnA = np.polyfit(t, lny, 1)

# Predicted values
lny_fit = lnA + k * t

# -----------------------------
# Regression statistics
# -----------------------------
n = len(t)

# Residuals
residuals = lny - lny_fit

# Standard error of regression
s = np.sqrt(np.sum(residuals**2) / (n - 2))

# Statistics for errors
t_mean = np.mean(t)
Sxx = np.sum((t - t_mean) ** 2)

# Standard errors
k_err = s / np.sqrt(Sxx)
lnA_err = s * np.sqrt(1/n + t_mean**2 / Sxx)

# R^2 coefficient
ss_res = np.sum(residuals**2)
ss_tot = np.sum((lny - np.mean(lny))**2)
r_squared = 1 - ss_res / ss_tot

# -----------------------------
# Plot
# -----------------------------
plt.figure(figsize=(6, 4))
plt.scatter(t, lny, s=40, alpha=0.7, label="Linearised data")
plt.plot(t, lny_fit, linewidth=2, label="Best fit line")

plt.xlabel("t")
plt.ylabel("ln(y)")
plt.title("Linearised exponential decay with regression")
plt.legend()
plt.grid(True)
plt.show()

# -----------------------------
# Half-life computation
# -----------------------------
t_half = np.log(2) / -k
t_half_err = np.log(2) / k**2 * k_err


# -----------------------------
# Output results
# -----------------------------
print("Linearised model:")
print(f"ln(y) = ({k:.4f} ± {k_err:.4f}) t + ({lnA:.4f} ± {lnA_err:.4f})")
print()
print(f"R^2 = {r_squared:.4f}")
print(f"Standard error of regression = {s:.4f}")
print()
print("Equivalent exponential model:")
print(f"y = {np.exp(lnA):.4f} * exp({k:.4f} t)")
print()
print(f"Half-life t_1/2 = {t_half:.4f} ± {t_half_err:.4f}")
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# -------------------------
# Data (entered directly)
# -------------------------
t = np.array([
    0.246, 0.492, 0.738, 0.984, 1.23, 1.476, 1.722, 1.968, 2.214, 2.46,
    2.706, 2.952, 3.198, 3.444, 3.69, 3.936, 4.182, 4.428, 4.674, 4.92,
    5.166, 5.412, 5.658, 5.904, 6.15, 6.396, 6.642, 6.888, 7.134, 7.38,
    7.626, 7.872, 8.118, 8.364, 8.61, 8.856, 9.102, 9.348, 9.594, 9.84
])

y = np.array([
    908.3475159, 788.1263257, 668.9006718, 554.6124143, 521.6023327,
    392.2851028, 406.7494851, 323.1341532, 282.4183865, 236.0078351,
    200.7706532, 199.8517187, 169.289558, 148.5259409, 127.8568286,
    98.33976068, 87.93068585, 87.27796212, 73.97245838, 66.69058729,
    56.82525099, 50.73912403, 39.4075143, 34.33557193, 32.61742786,
    25.96560655, 22.36805436, 19.64146032, 16.71665582, 14.63554653,
    12.49930957, 12.4940735, 9.520718439, 8.135601522, 7.562147198,
    6.250336563, 5.376122231, 4.91574392, 4.449048126, 3.892785478
])

# -------------------------
# Linearisation: ln(y) = ln(A) + k*t
# -------------------------
lny = np.log(y)

# Linear regression using scipy.stats
result = stats.linregress(t, lny)

k = result.slope
lnA = result.intercept
A = np.exp(lnA)

# Regression statistics
r_value = result.rvalue
r_squared = r_value**2
k_err = result.stderr
lnA_err = result.intercept_stderr
A_err = A * lnA_err  # propagated error

# Fitted line
lny_fit = lnA + k * t
y_fit = A * np.exp(k * t)

# -------------------------
# Standard error of regression
# -------------------------
n = len(t)
residuals = lny - lny_fit
s = np.sqrt(np.sum(residuals**2) / (n - 2))
t_mean = np.mean(t)
Sxx = np.sum((t - t_mean)**2)
k_err_alt = s / np.sqrt(Sxx)
lnA_err_alt = s * np.sqrt(1/n + t_mean**2 / Sxx)

# -------------------------
# Plot
# -------------------------
plt.figure(figsize=(6, 4))
plt.scatter(t, lny, s=40, alpha=0.7, label="Linearised data (ln(y))")
plt.plot(t, lny_fit, linewidth=2, label="Best fit line")
plt.xlabel("t [s]")
plt.ylabel("ln(y) [ln(decays/sec)]")
plt.title("Linearised exponential decay with regression")
plt.legend()
plt.grid(True)
plt.show()

# -------------------------
# Half-life computation
# -------------------------
t_half = np.log(2) / -k
t_half_err = np.log(2) / k**2 * k_err

# -------------------------
# Prediction at t = 5.535 s
# -------------------------
t_pred = 5.535
sigma_A = A * lnA_err
sigma_y = np.sqrt((np.exp(k * t_pred) * sigma_A)**2 + (A * t_pred * np.exp(k * t_pred) * k_err)**2)
y_pred = A * np.exp(k * t_pred)

# -------------------------
# Output results
# -------------------------
print("-----------------------")
print("Linearised Model with Uncertainty")
print("-----------------------")
print(f"ln(y) = ({k:.4f} ± {k_err:.4f}) t + ({lnA:.4f} ± {lnA_err:.4f})")
print(f"R² = {r_squared:.4f}")
print(f"Standard error of regression = {s:.4f}")
print(f"A = {A:.4f} ± {A_err:.4f}")
print()
print("-----------------------")
print("Exponential Model")
print("-----------------------")
print(f"y = {A:.4f} * exp({k:.4f} * t)")
print()
print("-----------------------")
print(f"Prediction at t = {t_pred:.3f} s:")
print(f"y = {y_pred:.4f} ± {sigma_y:.4f}")
print()
print("-----------------------")
print(f"Half-life t_1/2 = {t_half:.4f} ± {t_half_err:.4f}")
print()
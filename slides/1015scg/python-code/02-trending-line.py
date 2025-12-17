import numpy as np
import matplotlib.pyplot as plt
from scipy import stats

# -------------------------
# Data (entered directly)
# -------------------------
x = np.array([
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
# Linearisation
# ln(y) = ln(A) + kx
# -------------------------
lny = np.log(y)

# Linear regression using scipy.stats
result = stats.linregress(x, lny)

k = result.slope
lnA = result.intercept
A = np.exp(lnA)

r_value = result.rvalue
r_squared = r_value**2

# Standard errors
k_err = result.stderr
lnA_err = result.intercept_stderr
A_err = A * lnA_err   # error propagation

# -------------------------
# Fitted curve
# -------------------------
y_fit = A * np.exp(k * x)

# -------------------------
# Error curves (±1σ)
# -------------------------
y_fit_upper = (A + 4 * A_err) * np.exp((k + 4 * k_err) * x)
y_fit_lower = (A - 4 * A_err) * np.exp((k - 4 * k_err) * x)


# -------------------------
# Plot
# -------------------------
plt.figure(figsize=(6, 4))

plt.scatter(x, y, s=40, alpha=0.7, label="Data")
plt.plot(x, y_fit, linewidth=2, label="Best fit")

plt.plot(
    x, y_fit_upper,
    linestyle="--", linewidth=1.5,
    label="Upper fit (+4σ)"
)

plt.plot(
    x, y_fit_lower,
    linestyle="--", linewidth=1.5,
    label="Lower fit (−4σ)"
)

plt.xlabel("time [sec]")
plt.ylabel("activity [decays/sec]")
plt.title("Exponential decay fit with parameter uncertainty")
plt.legend()
plt.grid(True)
plt.show()


# -------------------------
# Output results
# -------------------------
print("Exponential model:")
print(f"A(t) = A exp(k t)")
print()
print(f"A = {A:.3f} ± {A_err:.3f}")
print(f"k = {k:.4f} ± {k_err:.4f}")
print(f"R² = {r_squared:.4f}")

# Value at t = 0
t0 = 0
A0 = A * np.exp(k * t0)
print(f"A(0) = {A0:.3f}")
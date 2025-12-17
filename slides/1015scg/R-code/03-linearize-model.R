# -------------------------
# Data (entered directly)
# -------------------------
t <- c(
  0.246, 0.492, 0.738, 0.984, 1.23, 1.476, 1.722, 1.968, 2.214, 2.46,
  2.706, 2.952, 3.198, 3.444, 3.69, 3.936, 4.182, 4.428, 4.674, 4.92,
  5.166, 5.412, 5.658, 5.904, 6.15, 6.396, 6.642, 6.888, 7.134, 7.38,
  7.626, 7.872, 8.118, 8.364, 8.61, 8.856, 9.102, 9.348, 9.594, 9.84
)

y <- c(
  908.3475159, 788.1263257, 668.9006718, 554.6124143, 521.6023327,
  392.2851028, 406.7494851, 323.1341532, 282.4183865, 236.0078351,
  200.7706532, 199.8517187, 169.289558, 148.5259409, 127.8568286,
  98.33976068, 87.93068585, 87.27796212, 73.97245838, 66.69058729,
  56.82525099, 50.73912403, 39.4075143, 34.33557193, 32.61742786,
  25.96560655, 22.36805436, 19.64146032, 16.71665582, 14.63554653,
  12.49930957, 12.4940735, 9.520718439, 8.135601522, 7.562147198,
  6.250336563, 5.376122231, 4.91574392, 4.449048126, 3.892785478
)

# -------------------------
# Linearisation: ln(y) = ln(A) + k*t
# -------------------------
lny <- log(y)
lin_fit <- lm(lny ~ t)

# Regression parameters
k <- coef(lin_fit)[2]
lnA <- coef(lin_fit)[1]
A <- exp(lnA)

# Standard errors
se <- summary(lin_fit)$coefficients[, "Std. Error"]
k_err <- se[2]
lnA_err <- se[1]
A_err <- A * lnA_err  # propagated error

# R-squared
r_squared <- summary(lin_fit)$r.squared

# Fitted line
lny_fit <- lnA + k * t
y_fit <- A * exp(k * t)

# -------------------------
# Standard error of regression
# -------------------------
n <- length(t)
residuals <- lny - lny_fit
s <- sqrt(sum(residuals^2) / (n - 2))
t_mean <- mean(t)
Sxx <- sum((t - t_mean)^2)
k_err_alt <- s / sqrt(Sxx)
lnA_err_alt <- s * sqrt(1/n + t_mean^2 / Sxx)

# -------------------------
# Plot
# -------------------------
plot(t, lny,
     pch = 19, cex = 1.5, col = rgb(0,0,0.7,0.7),
     xlab = "t [s]",
     ylab = "ln(y) [ln(decays/sec)]",
     main = "Linearised exponential decay with regression",
     las = 1)
grid()
lines(t, lny_fit, col = "red", lwd = 2)
legend("topright",
       legend = c("Linearised data", "Best fit line"),
       col = c(rgb(0,0,0.7,0.7), "red"),
       pch = c(19, NA),
       lty = c(NA, 1),
       lwd = c(NA, 2),
       bty = "n")

# -------------------------
# Half-life computation
# -------------------------
t_half <- log(2) / -k
t_half_err <- log(2) / k^2 * k_err

# -------------------------
# Prediction at t = 5.535 s
# -------------------------
t_pred <- 5.535
sigma_A <- A * lnA_err
sigma_y <- sqrt( (exp(k*t_pred) * sigma_A)^2 + (A * t_pred * exp(k*t_pred) * k_err)^2 )
y_pred <- A * exp(k * t_pred)

# -------------------------
# Output results
# -------------------------
cat("-----------------------\n")
cat("Linearised Model with Uncertainty\n")
cat("-----------------------\n")
cat(sprintf("ln(y) = (%.4f ± %.4f) * t + (%.4f ± %.4f)\n", k, k_err, lnA, lnA_err))
cat(sprintf("R² = %.4f\n", r_squared))
cat(sprintf("Standard error of regression = %.4f\n", s))
cat(sprintf("A = %.4f ± %.4f\n\n", A, A_err))

cat("-----------------------\n")
cat("Exponential Model\n")
cat("-----------------------\n")
cat(sprintf("y = %.4f * exp(%.4f * t)\n\n", A, k))

cat("-----------------------\n")
cat(sprintf("Prediction at t = %.3f s:\n", t_pred))
cat(sprintf("y = %.4f ± %.4f\n\n", y_pred, sigma_y))

cat("-----------------------\n")
cat(sprintf("Half-life t_1/2 = %.4f ± %.4f\n", t_half, t_half_err))
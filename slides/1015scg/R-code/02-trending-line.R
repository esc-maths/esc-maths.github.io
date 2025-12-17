# -------------------------
# Data
# -------------------------
x <- c(
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
# Non-linear fit using nls
# -------------------------
# Provide reasonable starting values
start_vals <- list(A = max(y), k = -0.5)

nls_fit <- nls(y ~ A * exp(k * x), start = start_vals)

# Extract parameters
coef_fit <- coef(nls_fit)
A <- coef_fit["A"]
k <- coef_fit["k"]

# Confidence intervals (approx. standard errors)
conf <- confint(nls_fit)
A_err <- (conf["A",2] - conf["A",1]) / 4  # roughly 1σ ≈ (upper-lower)/4
k_err <- (conf["k",2] - conf["k",1]) / 4

# Fitted curve
y_fit <- A * exp(k * x)

# ±4σ error curves
y_fit_upper <- (A + 4*A_err) * exp((k + 4*k_err) * x)
y_fit_lower <- (A - 4*A_err) * exp((k - 4*k_err) * x)

# -------------------------
# Plot
# -------------------------
plot(x, y,
     pch = 19, cex = 1.5, col = rgb(0,0,0.7,0.7),
     xlab = "time [sec]",
     ylab = "activity [decays/sec]",
     main = "Exponential decay fit (nls) with ±4σ",
     las = 1)
grid()
lines(x, y_fit, col = "red", lwd = 2)
lines(x, y_fit_upper, col = "orange", lty = 2, lwd = 1.5)
lines(x, y_fit_lower, col = "orange", lty = 2, lwd = 1.5)

legend("topright",
       legend = c("Data", "Best fit", "±4σ"),
       col = c(rgb(0,0,0.7,0.7), "red", "orange"),
       pch = c(19, NA, NA),
       lty = c(NA, 1, 2),
       lwd = c(NA, 2, 1.5),
       bty = "n")

# -------------------------
# Output results
# -------------------------
cat("Exponential model (nls):\n")
cat(sprintf("A(t) = %.3f * exp(%.4f * t)\n", A, k))
cat(sprintf("Estimated ±1σ: A = %.3f ± %.3f, k = %.4f ± %.4f\n", A, A_err, k, k_err))

# Value at t = 0
t0 <- 0
A0 <- A * exp(k * t0)
cat(sprintf("A(0) = %.3f\n", A0))
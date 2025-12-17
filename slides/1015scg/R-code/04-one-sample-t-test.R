# -------------------------
# Data
# -------------------------
data <- c(275.0266497, 255.0311768, 293.8473708, 267.1938408, 242.3487616)
mu0 <- 246.966  # hypothesised mean

# -------------------------
# One-sample t-test
# -------------------------
t_test <- t.test(data, mu = mu0)

# Extract t-statistic
t_stat <- t_test$statistic

# Degrees of freedom
df <- t_test$parameter

# Two-tailed t-critical value (alpha = 0.02)
alpha <- 0.02
t_critical <- qt(1 - alpha/2, df)

# -------------------------
# Output results
# -------------------------
cat("t-statistic:", t_stat, "\n")
cat("t-critical (two-tailed, alpha = 0.02):", t_critical, "\n")

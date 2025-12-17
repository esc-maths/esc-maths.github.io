import numpy as np
from scipy import stats

# Given data
data = np.array([
    275.0266497,	255.0311768,	293.8473708,	267.1938408,	242.3487616
])

mu0 = 246.966  # hypothesised mean

# One-sample t-test
t_stat, p_value = stats.ttest_1samp(data, mu0)

# Degrees of freedom
df = len(data) - 1

# t-critical value (alpha = 0.02, two-tailed)
alpha = 0.02
t_critical = stats.t.ppf(1 - alpha/2, df)

print("t-statistic:", t_stat)
print("t-critical:", t_critical)
import pandas as pd
import matplotlib.pyplot as plt

# URL of the CSV file
url = "https://esc-maths.github.io/assets/data-sets/decay3.csv"

# Read CSV
df = pd.read_csv(url)

# Convert first two columns to numeric (force errors to NaN)
x = pd.to_numeric(df.iloc[:, 0], errors="coerce")
y = pd.to_numeric(df.iloc[:, 1], errors="coerce")

# Remove rows with missing values
mask = x.notna() & y.notna()
x = x[mask]
y = y[mask]

# Scatter plot
plt.figure(figsize=(6, 4))
plt.scatter(x, y, s=40, alpha=0.7)

plt.xlabel(df.columns[0])
plt.ylabel(df.columns[1])
plt.title("Scatter plot of decay3.csv")
plt.grid(True)
plt.show()

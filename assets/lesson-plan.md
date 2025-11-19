# STEM Workshop - Plan

## 1. Introduction - Interactive demo in GeoGebra Classroom (10-15 mins)

Participants will work for a few minutes with activity about linear regression and sum of squared residuals:

[Explore linear regression](https://www.geogebra.org/m/mcw5yukz)

Remarks:
- This is an example of what we can do in GeoGebra to explore mathematical concepts dynamically.

## 2. Exploring system of linear equations in 3D (10-15 mins)

Explore different cases:
1. Consistent
2. Inconsistent 
    - Family of solutions
    - No solution

System:

$$
\begin{array}{rl}
2x + y - z &=& 2, \\
3x -y + 4z &=& -3, \\
x - y - 2z &=& 1
\end{array}
$$

Remarks:
- ???
- ???

## 3. How to plot slope fields (10-15 mins)

GeoGebra code:

1. `n = Slider(10, 30, 1)`
2. `s = Slider(0.1, 1, 0.1)`
2. `F(x,y) = cos(x + y)`
3. `SlopeField(F, n, s, -10, -10, 10, 10)`

Remarks:
- ???
- ???

## 4. How plot complex numbers and explore complex roots (10-15 mins)

Open GeoGebra Calculator: [GeoGebra Calculator](https://www.geogebra.org/calculator). In the left colum Input type

Explore the formula for the n-th roots:
$$
\sqrt[n]{z}= r^{1/n}\exp\left[i \left(\dfrac{\theta}{n}+ \dfrac{2\pi}{n}k\right)\right],\quad k = 0, 1, \ldots , n-1
$$

GeoGebra code:
1. `i`
2. `n = Slider(1, 10, 1)`
3. `Sequence(|z_1|^(1/n) * exp(i * (arg(z_1)/n + 2pi*k/n)), k, 0, n-1)`

Remarks:
- ???
- ???

## 5. More details about GeoGebra Classroom (if time allows it)

Discuss briefly how GeoGebra Classroom works and how to use pre-designed applets.
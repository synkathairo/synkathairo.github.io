---
layout: page
title: matrix exponential
aliases:
  - 矩阵指数
type:
  - definition
reference: 
course:
  - ECE6253
lecture:
  - ece6253-4
statement: $\begin{eqnarray}e^{At} \triangleq I + At + A\frac{t^2}{2!} + ... = \sum_{i=0}^\infty A^i \frac{t^i}{i!} \\\frac{de^{At}}{dt} = A [I + At + A^2 \frac{t^2}{2!} + ...] = Ae^{At}\end{eqnarray}$
created: 2024-10-21T21:29:49-04:00
tags:
  - linear_algebra
---
## Definition
$$\begin{aligned}
e^{At} \triangleq I + At + A^2\frac{t^2}{2!} + ... = \sum_{i=0}^\infty A^i \frac{t^i}{i!} \\
\frac{de^{At}}{dt} = A [I + At + A^2 \frac{t^2}{2!} + ...] = Ae^{At}
\end{aligned}$$

## Properties
- $e^{A0} = I + A0 + A^2 \frac{0^2}{2!} + ... = I$
- $(e^{At})^{-1} = e^{-At}$
- $\frac{d}{dt} e^{At} = A e^{At}$

## Notes
If $A$ is $1 \times 1$ i.e. scalar, this becomes the power series,
$$e^{at} = \sum_{k=0}^\infty \frac{(at)^k}{k!} = 1 + at + a^2\frac{t^2}{2!} + ...$$
which matches a common definition of the exponential function

___
## References
1. https://crrl.poly.edu/6253/lectures/lect4.pdf
2. https://en.wikipedia.org/wiki/Matrix_exponential
3. https://en.wikipedia.org/wiki/Characterizations_of_the_exponential_function

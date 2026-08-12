---
layout: entry
title: separable signals
type:
  - definition
reference:
course:
  - ECE6123
lecture:
  - ece6123-2-ft
statement: $f(m,n)$ is separable if $f(m,n)=f_v(m)f_h(n)$
created: 2023-10-24T20:45:41-04:00
---

$f(m,n)$ is separable if $f(m,n)=f_v(m)f_h(n)$

- where $f_v(m)$: changes vertically, $f_h(n)$: changes horizontally

Separable image = Rank 1 matrix

- Rank 1 matrix = product of 1D column vector and 1D row vector
- $H= \begin{bmatrix} 1 & 0 & -1 \\ 2 & 0 & -2 \\ 1 & 0 & -1 \end{bmatrix} = \begin{bmatrix} 1\\2\\1\end{bmatrix} \begin{bmatrix} 1&0&-1\end{bmatrix} = h_x h_y^T$

2D DSFT of separable signal = product of 1D DSFT of each 1D component

---

References:

1. https://en.wikipedia.org/wiki/Multidimensional_discrete_convolution#Separable_signals

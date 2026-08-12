---
layout: entry
title: Moore-Penrose pseudoinverse
aliases:
  - pseudoinverse
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-01-13T16:03:22-05:00
tags:
  - linear_algebra
---
## Definition
Consider $A \in \mathbb{R}_r^{m \times m}$, then $A$ has a unique **pseudoinverse** $A^+ \in \mathbb{R}_r^{m \times m}$.

## Theorem (Penrose, 1956)
For $A \in \mathbb{R}_r^{m \times m}$, $G = A^+$ if and only if the following hold:
1. $AGA = A$
2. $GAG = G$
3. $(AG)^T = AG$
4. $(GA)^T = GA$

Furthermore $A^+$ always exists and is unique.

## Theorem (Albert, 1972)

Let $A \in \mathbb{R}_r^{m \times m}$, then,
$$\begin{aligned}
A & = \lim_{\delta \to 0} (A^T A + \delta^2 I)^{-1} A^T \\
  & = \lim_{\delta \to 0} A^T (AA^T + \delta^2 I)^{-1}
\end{aligned}$$

## Notes

- This can be considered a generalization of the (two-sided) [[matrix inverse|inverse of a matrix]] where $AA^{-1} = I = A^{-1}A$
	- compare also *left inverse* and *right inverse*
- may use [[Singular value decomposition|SVD]] to compute it, e.g. for matrix $A$ if $A = U \Sigma V^T$, then $A^+ = V \Sigma^+ U^T$

___
## References
1. https://www.math.ucla.edu/~laub/33a.2.12s/mppseudoinverse.pdf
2. G. Strang, _Linear algebra and its applications_, 4th ed., 2011, p. 122.
3. https://math.stackexchange.com/questions/458404/how-can-we-compute-pseudoinverse-for-any-matrix
4. https://ocw.mit.edu/courses/18-06sc-linear-algebra-fall-2011/0550c89b69c99e97dcbf52074e293308_MIT18_06SCF11_Ses3.8sum.pdf

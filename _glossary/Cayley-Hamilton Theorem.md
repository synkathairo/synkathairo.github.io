---
layout: page
title: Cayley-Hamilton Theorem
aliases:
  - 哈密顿一凯莱定理
type:
  - theorem
reference: 
course:
  - ECE6253
lecture:
  - ece6253-5
statement: Every square matrix satisfies its own characteristic equation.
created: 2024-10-22T15:35:53-04:00
tags:
  - linear_algebra
---
## Theorem
Every square ($n \times n$) matrix satisfies its own characteristic equation.

If the characteristic polynomial is
$$p(\lambda) = \det(\lambda I - A) = \lambda^n + a_{n-1}\lambda^{n-1}+...+a_1\lambda + a_0$$
then from Cayley Hamilton theorem, 
$$p(A) = A^n + a_{n-1}A^{n-1} + a_{n-2}A^{n-2}+...+a_1 A + a_0 I = \Theta$$
where $\Theta$ is the zero matrix.

Any power of $A$ can be written as a linear combination of $I, A, A^2, ..., A^{n-1}$

Any function which has a convergent power series expansion can be expressed as a linear combination of $I, A, A^2, ..., A^{n-1}$
$$f(A) = \gamma_{n-1}A^{n-1} + \gamma_{n-2}A^{n-2} + ... + \gamma_1 A + \gamma_0 I = \sum_{j=0}^{n-1} \gamma_j A^j \triangleq g(A) $$
which is a finite polynomial.

Consider [[Matrix diagonalization|diagonalizable]] $A$ matrix, then, there exists a nonsingular matrix $T$ such that $T^{-1} A T = \Lambda$ where $\Lambda = \operatorname{diag}(\lambda_1...\lambda_n)$.

Then,
$$f(\Lambda) = \sum_{j=0}^{n-1} \gamma_j \Lambda^j =g(\Lambda)$$

It follows that 
$$f(\lambda_i) = \sum_{j=0}^{n-1} \gamma_j \lambda_i^j = g(\lambda_i) \quad \text{for} \quad i = 1,2,...,n$$

By choosing $\gamma_0, \gamma_1,...\gamma_{n-1}$ to satisfy this equation we make $f(A) = g(A)$.

### Theorem
For any two arbitrary polynomial functions $f(\lambda)$ and $g(\lambda)$ such that
$$\frac{d^j f(\lambda_i)}{d\lambda^j} = \frac{d^j g(\lambda_i)}{d\lambda^j} \quad \text{for} \quad i=1,...,s; \quad j=0,...,n_{i-1}$$
(i.e. values of $f$ and $g$ on spectrum of $A$ are equal), then $f(A) = g(A)$.

This theorem is utilized in a special case above.

## Application to finding matrix exponential

The [[matrix exponential]] can be found as follows,




#incomplete 

___
## References
1. https://crrl.poly.edu/6253/lectures/lect5.pdf
2. https://mathworld.wolfram.com/Cayley-HamiltonTheorem.html
3. P. E. Sarachik, *Principles of Linear Systems*, Cambridge Press, 1996, pp. 75-77.
4. https://web.mit.edu/2.151/www/Handouts/CayleyHamilton.pdf
---
layout: entry
title: Fadeev-Leverrier method
aliases:
  - Leverrier's method
  - Faddeev–LeVerrier algorithm
type:
  - algorithm
reference:
course:
  - ECE6253
lecture:
  - ece6253-7
statement:
created: 2024-10-21T23:37:52-04:00
---

When using $\mathscr{L}$-transform method to solve for transition matrix, necessary to invert matrix $(sI-A)$.

Let $p(s) = \det(sI-A) = s^n + a_{n-1}s^{n-1} + ... + a_1 s + a_0$ be the characteristic polynomial of $A$ and $\Gamma(s)$ the adjoint matrix of $(sI - A)$. (i.e. $\Gamma_{ij}(s)$ is the cofactor of the $ji$th element of $(sI-A)$)

Matrix theory gives that inverse is given by $(sI - A)^{-1} = \frac{\Gamma(s)}{p(s)}$

Iterative procedure to calculate $(sI - A)^{-1}$.

1. Start with $K_{n-1} = I$ ($a_n = 1$). Then for $j=1$,
2. calculate $a_{n-j} = \frac{1}{j} \operatorname{tr}(K_{n-j} A)$,
3. calculate $K_{n-j-1} = K_{n-j} A  + a_{n-j} I$,
4. increase $j$ by $1$ and return to step 2 if $j \leq n$. (Check: $K_{-1} = \Theta$)

---

## References

1. https://crrl.poly.edu/6253/lectures/lect7.pdf
2. P. E. Sarachik, _Principles of Linear Systems_, Cambridge Press, 1996, pp. 106-107.
3. https://people.engr.tamu.edu/spb/courses/linearsystems/ECEN605Lecture07.pdf
4. https://en.wikipedia.org/wiki/Faddeev%E2%80%93LeVerrier_algorithm

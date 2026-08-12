---
layout: entry
title: pole placement
aliases: 
type: 
reference: 
course:
  - ECE6253
lecture:
  - ece6253-10
statement: 
created: 2024-12-01T18:07:17-05:00
tags:
  - control_theory
---
Consider system
$$\dot{\mathbf{x}} = A\mathbf{x}$$
Solution to system is 
$$\mathbf{x}(t) = e^{At}\mathbf{x}(0)$$
If eigenvalues of $A$ all lie in open [[left half-plane]], $\mathbf{x}(t)$ asymptomatically approaches origin as time $t \to \infty$, i.e. *asymptomatically stable*.

If eigenvalues of $A$ lie in the closed left half-plane, (some eigenvalues possibly on imaginary axis), 


___
## References
1. https://crrl.poly.edu/6253/lectures/lect4.pdf

---
layout: page
title: Gradient descent convergence for α-strongly convex functions
aliases:
  - GD convergence for α-strongly convex functions
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-8
statement: "Let $f$ be an α-strongly convex function and assume we have that, for all $\\mathbf{x}$, $||\\nabla f(\\mathbf{x})||_2 \\leq G$. If we run GD for $T$ steps (with adaptive step sizes) we have: $f(\\hat{\\mathbf{x}})-f(\\mathbf{x}^*) \\leq \\frac{2G^2}{\\alpha T}$"
created: 2023-11-27T01:43:55-05:00
---
Let $f$ be an [[α-strongly convex]] function and assume we have that, for all $\mathbf{x}$, $||\nabla f(\mathbf{x})||_2 \leq G$. If we run [[gradient descent|GD]] for $T$ steps (with adaptive step sizes) we have:
$$f(\hat{\mathbf{x}})-f(\mathbf{x}^*) \leq \frac{2G^2}{\alpha T}$$
## Corollary
If $T=O(\frac{G^2}{\alpha \epsilon})$ we have $f(\hat{\mathbf{x}})-f(\mathbf{x}^*) \leq \epsilon$

___
See: [[gradient descent convergence bound]]

Also compare: [[Gradient descent convergence for β-smooth functions]]
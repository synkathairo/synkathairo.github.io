---
layout: page
title: convergence to stationary point
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-8
statement: "For any β-smooth differentiable function $f$ (convex or not), if we run GD for $T$ steps, we can find a point $\\hat{\\mathbf{x}}$ such that: $||\\nabla f(\\hat{\\mathbf{x}})||_2^2 \\leq \\frac{2\\beta}{T}\\left(f(\\mathbf{x}^{(0)})-f(\\mathbf{x}^*)\\right)$"
created: 2023-11-27T01:36:52-05:00
---
## Theorem
For any [[β-smoothness|β-smooth]] differentiable function $f$ ([[convex function|convex]] or not), if we run [[gradient descent|GD]] for $T$ steps, we can find a point $\hat{\mathbf{x}}$ such that:
$$||\nabla f(\hat{\mathbf{x}})||_2^2 \leq \frac{2\beta}{T}\left(f(\mathbf{x}^{(0)})-f(\mathbf{x}^*)\right)$$

## Corollary
If $T \geq \frac{2\beta}{T}$, then $||\nabla f(\hat{\mathbf{x}})||_2^2 \leq \epsilon \left(f(\mathbf{x}^{(0)})-f(\mathbf{x}^*)\right)$.

___
see: [[stationary point]], [[convergence]]
---
layout: entry
title: Gradient descent convergence for β-smooth functions
aliases:
  - GD convergence for β-smooth functions
type:
  - theorem
reference: 
course:
  - CS6763
lecture:
  - cs6763-6
statement: "Let $f$ be a [[β-smoothness|β-smooth]] [[Convex function|convex function]] and assume we have $||\\mathbf{x}^* - \\mathbf{x}^{(1)}||_2 \\leq R$. If we run [[Gradient descent|GD]] for $T$ steps, we have: $f(\\mathbf{x}^{(T)}) - f(\\mathbf{x}^{*}) \\leq \\frac{2\\beta R^2}{T}$"
created: 2023-11-14T22:21:37-05:00
---
Let $f$ be a [[β-smoothness|β-smooth]] [[convex function|convex function]] and assume we have $||\mathbf{x}^* - \mathbf{x}^{(1)}||_2 \leq R$. If we run [[gradient descent|GD]] for $T$ steps, we have:
$$f(\mathbf{x}^{(T)}) - f(\mathbf{x}^{*}) \leq \frac{2\beta R^2}{T}$$

## Corollary
If $T = O(\frac{\beta R^2}{\epsilon})$ we have $f(\mathbf{x}^{(T)}) - f(\mathbf{x}^{*}) \leq \epsilon$

___
Compare to: [[gradient descent convergence bound]], [[Gradient descent convergence for α-strongly convex functions]]

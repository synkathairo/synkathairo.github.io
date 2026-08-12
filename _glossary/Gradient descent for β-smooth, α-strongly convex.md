---
layout: entry
title: Gradient descent for β-smooth, α-strongly convex
aliases:
  - GD for β-smooth, α-strongly convex
type:
  - theorem
reference:
course:
  - CS6763
lecture:
  - cs6763-8
statement:
created: 2023-11-30T02:38:11-05:00
---

Let $f$ be a [[β-smoothness|β-smooth]] and [[α-strongly convex]] function. If we run [[gradient descent|GD]] for $T$ steps (with step size $η = \frac{1}{β}$) we have:
$$||\mathbf{x}^{(T)} − \mathbf{x}^*||_2^2 ≤ e^{−T\frac{α}{β}} ||\mathbf{x}^{(0)}−\mathbf{x}^*||_2^2$$

$\kappa = \frac{\beta}{\alpha}$ is called the **condition number** of $f$

---

compare: [[Gradient descent convergence for β-smooth functions]], [[Gradient descent convergence for α-strongly convex functions]]

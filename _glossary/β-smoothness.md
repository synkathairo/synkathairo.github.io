---
layout: entry
title: β-smoothness
aliases:
  - beta-smoothness
  - β-smooth
  - beta-smooth
type:
  - definition
reference:
course:
  - CS6763
lecture:
  - cs6763-6
  - cs6763-8
statement: "A function $f$ is $\\beta$ smooth if, for all $\\mathbf{x},\\mathbf{y}$: $||\\nabla f(\\mathbf{x})-\\nabla f(\\mathbf{y})||_2 \\leq \\beta ||\\mathbf{x}-\\mathbf{y}||_2$. For scalar valued function $f$, equivalent to $f''(x) \\leq \\beta$."
created: 2023-11-02T18:37:16-04:00
---

## Definition

A function $f$ is $\beta$ smooth if, for all $\mathbf{x},\mathbf{y}$:
$$||\nabla f(\mathbf{x})-\nabla f(\mathbf{y})||_2 \leq \beta ||\mathbf{x}-\mathbf{y}||_2$$

For scalar valued function $f$, equivalent to $f''(x) \leq \beta$.

---

For scalar functions, a twice-differentiable function $f$ is [[α-strongly convex]] and $\beta$-smooth if for all $x$,
$$\alpha \leq f''(x) \leq \beta$$

---

## References:

1. https://arxiv.org/pdf/1405.4980.pdf

---
layout: entry
title: constrained convex optimization
type:
  - approach
reference:
course:
  - CS6763
lecture:
  - cs6763-6
statement: Solve a convex minimization problem with additional convex constraints, $\min_{x \in \mathcal{S}}f(\mathbf{x})$ where $\mathcal{S}$ is a convex set.
created: 2023-11-14T21:24:08-05:00
---
Solve a convex minimization problem with additional convex constraints,
$$\min_{x \in \mathcal{S}}f(\mathbf{x})$$
where $\mathcal{S}$ is a [[convex set|convex set]].

## Examples:
- **norm constraint**: minimize $||\mathbf{Ax} − \mathbf{b}||_2$ subject to $||\mathbf{x}||_2 ≤ λ$.
- **positivity constraint**: minimize $f(\mathbf{x})$ subject to $\mathbf{x} \geq 0$
- **linear constraint**: minimize $\mathbf{c}^\intercal \mathbf{x}$ subject to $\mathbf{Ax} \leq \mathbf{b}$

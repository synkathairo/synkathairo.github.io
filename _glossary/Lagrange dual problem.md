---
layout: entry
title: Lagrange dual problem
aliases:
  - dual problem
  - duality
  - Lagrange dual function
  - dual function
type:
  - definition
  - function
reference:
course:
lecture:
statement:
created: 2025-09-30T18:06:53-04:00
tags:
  - convex_optimization
---
## Definition

Define the **Lagrange dual function** $g: \mathbb{R}^m \times \mathbb{R}^p \to \mathbb{R}$ as minimum value of the [[Lagrangian]] over $x$, i.e. for $\lambda \in \mathbb{R}^m$, $\nu \in \mathbb{R}^p$, $$g(\lambda, \nu) = \inf_{x \in \mathcal{D}} L(x, \lambda, \nu) = \inf_{x \in \mathcal{D}} \left( f_0(x) + \sum_{i=1}^m \lambda_i f_i(x) + \sum_{i=1}^p \nu_i h_i(x) \right)$$

## Notes

- if Lagrangian is unbounded below in $x$, then dual function takes value $- \infty$.
- dual function is pointwise infimum of family of affine functions of $(\lambda, \nu)$, hence concave even when [[Primal|optimization problem]] is not [[convex function|convex]]

## See also

- [[Fenchel duality]], Wolfe dual


___
## References

1. https://en.wikipedia.org/wiki/Duality_(optimization)
2. S. P. Boyd and L. Vandenberghe, _Convex optimization_, 2004, p. 216. \[Online\]. Available: [https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) doi: 10.1017/CBO9780511804441 ISBN: 9780521833783

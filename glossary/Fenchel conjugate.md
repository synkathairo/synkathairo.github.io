---
layout: entry
title: Fenchel conjugate
aliases:
  - convex conjugate
  - Legendre transform
  - Legendre-Fenchel transformation
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-02-13T22:01:37-05:00
tags:
  - convex_optimization
---

## Definition

Suppose function $f$ which is [[convex function|convex]] and [[differentiable function|differentiable]], where $\mathrm{dom} f = \mathbb{R}^n$. then any maximizer $x^*$ of $y^T x - f(x)$ satisfies $y = \nabla f(x^*)$, conversely, if $x^*$ satisfies $y = \nabla f(x^*)$, then $x^*$ maximizes $y^T x - f(x)$. Therefore, if $y = \nabla f(x^*)$, have $$f^*(y) = x^{*T} \nabla f(x^*) - f(x^*)$$

Or, let $z \in \mathbb{R}^n$ be arbitary, define $y = \nabla f (z)$, then $$f^*(y) = z^T \nabla f(z) - f(z)$$
or simply, given function $f$, $$f^*(y) = \sup_{x \in \operatorname{dom}(f)} (y^T x - f(x))$$

## Notes

- Intuition: for given slope, find "highest" line that minorizes (i.e. lives below) function, i.e. line with largest possible intercept, which is $-f^*(y)$
- role in [[Fenchel duality]]
  - see [[weak duality]], [[strong duality]]

---

## References

1. https://en.m.wikipedia.org/wiki/Convex_conjugate
2. S. P. Boyd and L. Vandenberghe, _Convex optimization_, 2004, p. 95. \[Online\]. Available: [https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf) doi: 10.1017/CBO9780511804441 ISBN: 9780521833783
3. https://www.stat.cmu.edu/~siva/teaching/725/lec12.pdf

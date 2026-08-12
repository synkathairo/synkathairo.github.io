---
layout: page
title: quasiconvex function
aliases:
  - quasiconvex
type:
  - definition
reference: 
course: 
lecture: 
statement: "*Function* $f: S \\to \\mathbb{R}$ defined on [[convex set|convex subset]] $S$ of *real vector space* is **quasiconvex** if for all $x,y \\in S$ and $\\lambda \\in [0,1]$, $f(\\lambda x + (1-\\lambda)y) \\leq \\max \\{f(x), f(y)\\}$"
created: 2025-07-22T16:40:02-04:00
tags:
  - analysis
---
## Definition

*Function* $f: S \to \mathbb{R}$ defined on [[convex set|convex subset]] $S$ of *real vector space* is **quasiconvex** if for all $x,y \in S$ and $\lambda \in [0,1]$,
$$f(\lambda x + (1-\lambda)y) \leq \max \{f(x), f(y)\}$$

## Notes

- For a *quasiconvex function*, all of the *sublevel sets* are [[convex set|convex]].
- All [[convex function|convex functions]] are *quasiconvex*.

___
## References

1. https://en.wikipedia.org/wiki/Quasiconvex_function
2. https://math.stackexchange.com/questions/4518389/what-is-the-difference-among-pseudoconvex-quasiconvex-and-convex-functions

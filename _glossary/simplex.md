---
layout: entry
title: simplex
aliases:
  - 单纯形
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-3
statement: "For any finite set $A$, denote by $\\Delta(A)$ the set of all probability distributions over $A$. That is, $\\Delta(A) := \\left\\{ p : A \\to [0,1] : \\sum_{a \\in A} p(a) = 1 \\right\\}$. The set $\\Delta(A)$ is termed a **simplex** in $\\mathbb{R}^{|A|}$."
created: 2024-11-17T19:54:19-05:00
tags:
  - probability
  - convex_optimization
---
## Definition
For any *finite* [[set]] $A$, denote by $\Delta(A)$ the set of all [[probability density function|probability distributions]] over $A$. That is,
$$\Delta(A) := \left\{ p : A \to [0,1] : \sum_{a \in A} p(a) = 1 \right\}$$
The set $\Delta(A)$ is termed a **simplex** in $\mathbb{R}^{|A|}$.

## Notes

- simplex is a [[polytope]]
- *simplex algorithm* allows efficiently solving extreme points of a [[polytope]], used in [[linear programming]] 


___
## References
1. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, p. 146.
2. https://en.wikipedia.org/wiki/Simplex
3. https://optimization.cbe.cornell.edu/index.php?title=Simplex_algorithm

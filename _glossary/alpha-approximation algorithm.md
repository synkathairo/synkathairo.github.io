---
layout: entry
title: alpha-approximation algorithm
aliases:
  - α-approximation algorithm
  - performance guarantee
type:
  - definition
reference:
course:
  - CS9233
lecture:
  - cs9233-1
statement:
created: 2025-01-23T15:28:42-05:00
tags:
  - approximation_algorithms
---
## Definition
An **α-approximation algorithm** for an optimization problem is a [[class P|polynomial-time algorithm]] that for all instances of the problem produces a solution whose value is within a factor of $\alpha$ of the value of an optimal solution.

For an *α-approximation algorithm*, $\alpha$ will be called the **performance guarantee** of the algorithm, in some literature also known as the **approximation ratio** or **approximation factor** of the algorithm.

A convention (followed by Williamson & Shmoys) is that $\alpha>1$ for minimization problems and $\alpha < 1$ for maximization problem, and thus a $\frac{1}{2}$-approximation algorithm for a maximization problem is a polynomial-time algorithm that always returns a solution whose value is at least half the optimal value.

___
## References
1. D. P. Williamson, D. B. Shmoys. *Approximation Algorithms*, Cambridge University Press, 2010, p. 14.

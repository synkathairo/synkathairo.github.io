---
layout: page
title: linear programming
aliases:
  - linear program
  - LP
type:
  - approach
reference: 
course:
  - CS6763
  - CSCI2945
lecture:
  - cs6763-10
statement: 
created: 2023-12-14T14:54:15-05:00
---
## Overview

LP

[[Primal]] (P), where $x \in \mathbb{R}^n$: 
$$
\begin{aligned}
& \text{minimize}
& & c^T x \\
& \text{subject to}
& & Ax = b \\
& & & x \geq 0
\end{aligned}
$$

[[Lagrangian]]:
$$L(x,\lambda,\nu)=c^T x - \lambda^T x + \nu^T (Ax-b)
= (c-\lambda+A^T \nu)x-b^T \nu$$

[[Lagrange dual problem|Lagrange dual function]] (LDF):
$$g(\lambda,\nu) = \inf_x L(x,\lambda,\nu)=\begin{cases} -b^T \nu \quad \text{if } c-\lambda + A^T \nu = 0 \\ -\infty \quad \text{otherwise}\end{cases}$$

[[Lagrange dual problem]] (LDP):
$$\sup_{\lambda \geq 0} g(\lambda,\nu) \equiv$$
$$
\begin{aligned}
& \max
& & b^T y \\
& \text{subject to}
& & A^T y + \lambda = c \\
& & & \lambda \geq 0
\end{aligned}
$$
where $\lambda$ is the **dual slack variable**, transforming $A^T y \leq c$ into an equality.

[[Lagrange dual problem|Dual]] (D):
$$
\begin{aligned}
& \max
& & b^T y \\
& \text{subject to}
& & A^T y \leq c
\end{aligned}
$$

___
## References:

1. https://www.cs.princeton.edu/courses/archive/fall18/cos521/Lectures/lec17.pdf

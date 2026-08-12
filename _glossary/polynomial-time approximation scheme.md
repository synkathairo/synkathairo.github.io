---
layout: entry
title: polynomial-time approximation scheme
aliases:
  - PTAS
type:
  - definition
reference: 
course:
  - CS9233
lecture: 
statement: 
created: 2025-01-23T21:27:38-05:00
tags:
  - approximation_algorithms
---
## Definition
A **polynomial-time approximation scheme (PTAS)** is a family of algorithms $\{A_\epsilon\}$, where $\exists A_\epsilon$ for each $\epsilon > 0$, such that $A_\epsilon$ is a $(1 + \epsilon)$-[[alpha-approximation algorithm|approximation algorithm]] (for minimization problems) or a $(1 - \epsilon)$-[[alpha-approximation algorithm|approximation algorithm]] (for maximization problems).

___
## References
1. D. P. Williamson, D. B. Shmoys. *Approximation Algorithms*, Cambridge University Press, 2010, p. 15.

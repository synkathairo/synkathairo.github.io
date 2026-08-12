---
layout: entry
title: security strategy
aliases:
  - security level
type:
  - definition
reference:
course:
  - ECE6263
lecture:
  - ece6263-2
statement:
created: 2024-11-14T15:28:19-05:00
tags:
  - game_theory
---

## Definition

Consider a [[matrix game]] (a [[two-player zero-sum game]]) where P1 is a minimizer, P2 is a maximizer.

P1 secures his _strategy_ against any behavior of P2, picking row ($i^*$) whose largest entry is no bigger than the largest entry of any other row. The strategy "row $i$" that secures losses no greater than $\overline{V}$ is the **loss ceiling** of P1, which satisfies
$$\overline{V}(A) = \max_j a_{i^* j} \leq \max_j a_{ij} \quad i=1,...,m$$
or equivalently, the **security level** for his losses.

P2 will similarly secure gains against P1, and will choose the column ($j^*$) whose smallest entry is no smaller than the smallest entry from any other column, the **gain-floor** of P2
$$\underline{V}(A) = \min_i a_{ij^*} \geq \min_i a_{ij}$$
or equivalently, the **security level** for his gains.

Thus, it may be shown that,
![[theorem, security levels of matrix game players#Theorem]]

---

## References

1. T. Başar and G.J. Olsder, _Dynamic Noncooperative Game Theory_, 2nd edition, Classics in Applied Mathematics, SIAM, Philadelphia, 1999, p. 18.

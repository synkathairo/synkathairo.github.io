---
layout: entry
title: conjunctive normal form
aliases:
  - CNF form
  - CNF
  - kCNF
type:
  - definition
reference:
course:
lecture:
statement: Boolean formula over variables $u_1,...,u_n$ is in **CNF form** if it is an *AND* of *OR*'s in variables or their negation, i.e. $\bigwedge_i\left(\bigvee_j v_{i_j}\right)$
created: 2025-03-04T21:43:28-05:00
tags:
  - complexity_theory
---

## Definition (_CNF_)

Boolean formula over variables $u_1,...,u_n$ is in **CNF form** if it is an _AND_ of _OR_'s in variables or their negation, or more generally,
$$\bigwedge_i\left(\bigvee_j v_{i_j}\right)$$
where each variable $v_{i_j}$ is either a variable $u_k$ or its negation $\bar{u}_k$. The terms $v_{i_j}$ are called _literals_ of the formula, and terms $\lor_j v_{i_j}$ are called its _clauses_.

## Definition ($k$CNF)

A $k$**CNF** is a _CNF_ formula in which all clauses contain at most $k$ literals.

## See also

- compare to [[implicative normal form]] for clauses, where e.g. $a \lor b$ is equivalent to $\lnot a \Rightarrow b \land \lnot b \Rightarrow a$

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, pp. 44-45.

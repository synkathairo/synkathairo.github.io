---
layout: entry
title: pairwise independence
type:
  - definition
reference: 
lecture:
  - cs6763-2
statement: $X_i,X_j$ are [[Independence|independent]] for all $i,j \in \{1,…,k\}$
created: 2023-10-12T18:12:46-04:00
course:
  - CS6763
tags:
  - probability
---
## Definition

$X_1,…,X_k$ are **pairwise independent** if $X_i,X_j$ are [[independence|independent]] for all $i,j \in \{1,…,k\}$

Fact: For pairwise independent random variables $X_1,…,X_m$,
$$\mathrm{Var}[X_1 + X_2 + ... + X_m] = \mathrm{Var}[X_1] + \mathrm{Var}[X_2] + ... + \mathrm{Var}[X_m]$$

i.e. we require that for any $i,j$ that $X_i$ and $X_j$ are independent.

## Notes
- Weaker than [[mutual independence]].
- See [[types of independence]].

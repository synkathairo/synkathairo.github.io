---
layout: entry
title: mutual independence
aliases:
  - mutually independent
type:
  - definition
reference: 
lecture:
  - cs6763-2
statement: $\mathrm{Pr}[X_1 = v_1, ..., X_k = v_k] = \mathrm{Pr}[X_1 = v_1]\cdot ... \cdot \mathrm{Pr}[X_k = v_k]$
created: 2023-10-12T18:17:03-04:00
course:
  - CS6763
tags:
  - probability
---
## Definition

[[random variable|Random variables]] $X_1,…,X_k$ are **mutually independent** if, for all possible values $v_1,…,v_k$,
$$\mathrm{Pr}[X_1 = v_1, ..., X_k = v_k] = \mathrm{Pr}[X_1 = v_1]\cdot ... \cdot \mathrm{Pr}[X_k = v_k]$$

___
Strictly stronger than [[pairwise independence]];
mutual independence implies pairwise independence, but pairwise independence does not imply mutual independence.

See [[types of independence]].

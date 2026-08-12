---
layout: entry
title: union bound
aliases:
  - Boole's inequality
type:
  - lemma
reference: 
lecture:
  - cs6763-1
statement: $\mathrm{Pr}[A_1 \cup A_2 \cup ... \cup A_k] \leq \mathrm{Pr}[A_1] + \mathrm{Pr}[A_2] + ... + \mathrm{Pr}[A_k]$
created: 2023-10-12T15:27:33-04:00
course:
  - CS6763
  - ECE6303
tags:
  - probability
---
## Lemma

For any random *events* $A_1,...,A_k$ (*countable*):
$$\mathrm{Pr}[A_1 \cup A_2 \cup ... \cup A_k] \leq \mathrm{Pr}[A_1] + \mathrm{Pr}[A_2] + ... + \mathrm{Pr}[A_k]$$

(here in $\mathrm{Pr}[A_1 \cup A_2 \cup ... \cup A_k]$, $\cup$ means “or”)

## Notes
- follows from fact that a [[measure]] (such as a *probability measure*) is $\sigma$-*sub-additive*, so it holds not only for probability, but for any finite measure

___
## References
1. https://en.wikipedia.org/wiki/Boole%27s_inequality
2. https://www.probabilitycourse.com/chapter6/6_2_1_union_bound_and_exten.php

---
layout: entry
title: Hoeffding inequality
type:
  - theorem
reference:
lecture: cs6763-2
statement: $\mathrm{Pr}[|S-\mu|>\alpha] \leq 2e^{-\frac{\alpha^2}{\sum_{i=1}^k (b_i-a_i)^2}}$
created: 2023-10-12T15:11:55-04:00
course: CS6763
---

## Theorem

Let $X_1,X_2,...,X_k$ be [[independence|independent]] [[random variable|random variables]] with each $X_i \in [a_i,b_i]$. Let $\mu_i=\mathbb{E}[X_i]$ and $\mu=\sum_i \mu_i$. Then, for any $\alpha > 0$, $S = \sum_i X_i$ satisfies:
$$\mathrm{Pr}[\lvert S-\mu \rvert >\alpha] \leq 2e^{-\frac{\alpha^2}{\sum_{i=1}^k (b_i-a_i)^2}}$$

---

Example of [[concentration inequality]].

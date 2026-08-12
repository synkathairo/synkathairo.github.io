---
layout: entry
title: Bernstein inequality
type:
  - theorem
reference: 
lecture:
  - cs6763-2
statement: $\mathrm{Pr}[|S-\mu| > k \cdot \sigma]\leq 2e^{-\frac{k^2}{4}}$
created: 2023-10-12T15:04:56-04:00
course:
  - CS6763
---

Let $X_1,X_2,...,X_k$ be [[independence|independent]] [[random variable|random variables]] with each $X_i \in [-1,1]$. Let $\mu_i = \mathbb{E}[X_i]$ and $\sigma_i^2=\mathrm{Var}[X_i]$. Let $\mu=\sum_i \mu_i$ and $\sigma^2 = \sum_i \sigma_i^2$. Then, for $k \leq \frac{1}{2}\sigma$, $S=\sum_i X_i$ satisfies
$$\mathrm{Pr}[|S-\mu| > k \cdot \sigma]\leq 2e^{-\frac{k^2}{4}}$$

___
Example of [[concentration inequality]]. 

Special cases: [[Chernoff bound]], [[Hoeffding inequality]], Azuma’s Inequality

References:
- https://en.wikipedia.org/wiki/Bernstein_inequalities_(probability_theory)

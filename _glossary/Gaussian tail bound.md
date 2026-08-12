---
layout: entry
title: Gaussian tail bound
type:
  - lemma
reference:
lecture:
  - cs6763-2
statement: $\mathrm{Pr}[|X-\mathbb{E}X|\geq k \cdot \sigma] \leq 2e^{-k^2/2}$
created: 2023-10-12T13:48:11-04:00
course:
  - CS6763
aliases:
  - Gaussian concentration inequality
tags:
  - probability
---

For $X \sim \mathcal{N}(\mu,\sigma^2)$:
$$\mathrm{Pr}[|X-\mathbb{E}X|\geq k \cdot \sigma] \leq 2e^{-k^2/2}$$

see [[Gaussian distribution|Gaussian concentration]]

---

compare [[Chebyshev's inequality]]; Gaussian random variables concentrate much tighter around their expectation than variance alone (i.e. Chebyshevs’s inequality) predicts.

---

References:

1. https://www.math.uci.edu/~rvershyn/papers/concentration-random-tensors.pdf

---
layout: entry
title: central limit theorem
aliases:
  - Lindberg-Lévy central limit theorem
  - CLT
  - classical CLT
  - 林德伯格-莱维中心极限定理
  - 中心极限定理
type:
  - theorem
reference: 
course:
  - CS6763
  - ECE6303
lecture:
  - cs6763-3
  - ece6303-11
statement: $S = \sum_{i=1}^k X_i \implies \mathcal(k \cdot \mu, k \cdot \sigma^2)$
created: 2023-10-16T16:55:02-04:00
tags:
  - probability
---
## Theorem
Let $X_1, X_2,...$ be [[independent and identically distributed|i.i.d.]] [[random variable|random variables]] with [[expectation|expected value]] $\mathbb{E}[X_i] = \eta$ and *finite* [[variance]] $\operatorname{Var}(X_i) = \sigma^2$, and define $Y_n$ as
$$Y_n = \frac{X_1 + ... + X_n}{n}$$
then, $\sqrt{n}(Y_n - \eta) \to X$ [[convergence in distribution|in distribution]] (converges in distribution to $X$), where $X \sim \mathcal{N}(0,\sigma^2)$ ([[Gaussian distribution]])

($\sqrt{n}(Y_n - \eta) \overset{d}{\to} \mathcal{N}(0,\sigma^2)$)

## CLT - Informal
Any sum of mutually independent, (identically distributed) random variables $X_1,…,X_k$ with mean $\mu$ and finite variance $\sigma^2$ converges to a [[Gaussian distribution|Gaussian random variable]] with mean $k \cdot \mu$ and [[variance|variance]] $k \cdot \sigma^2$, as $k \rightarrow \infty$.
$$
S = \sum_{i=1}^k X_i \implies \mathcal{N}(k \cdot \mu, k \cdot \sigma^2)
$$

## See also
- [[weak law of large numbers]] (convergence in probability)
- [[strong law of large numbers]] (convergence almost everywhere or with probability 1)

___
## References:
1. https://math.mit.edu/~sheffield/2018600/Lecture22.pdf
2. https://www.probabilitycourse.com/chapter7/7_1_2_central_limit_theorem.php
3. https://people.math.harvard.edu/~knill/teaching/math19b_2011/handouts/lecture32.pdf
4. https://en.wikipedia.org/wiki/Central_limit_theorem#Classical_CLT

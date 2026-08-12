---
layout: entry
title: strong law of large numbers
aliases:
  - SLLN
  - 强大数定律
type:
  - theorem
reference: 
course:
  - ECE6303
lecture: 
statement: 
created: 2025-04-22T22:22:09-04:00
tags:
  - probability
---
## Proposition
Let $X_1, X_2,...,X_n$ be a *sequence* of [[mutual independence|mutually independent]] and [[independent and identically distributed|identically distributed]] [[random variable|random variables]] where each has *finite* *mean* ([[expectation|expected value]]) $E[X_k] = \eta < \infty$, then, suppose $Y_n$ such that
$$Y_n = \frac{X_1 + ... + X_n}{n}$$
then for any $\varepsilon > 0$,
$$P(\lim_{n \to \infty} \lvert Y_n - \eta \rvert > \varepsilon) = 0$$
([[convergence almost everywhere|w.p. 1]])


## See also
- [[weak law of large numbers]]
- [[central limit theorem]]

___
## References
1. https://www.sciencedirect.com/topics/mathematics/strong-law-of-large-number
2. https://zhuanlan.zhihu.com/p/422520475

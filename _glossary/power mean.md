---
layout: entry
title: power mean
aliases:
  - generalized mean
  - Hölder mean
  - p-mean
type:
  - definition
reference:
course:
lecture:
statement: $M_p(a_1,...,a_n) \equiv \left(\frac{1}{n} \sum_{k=1}^n a_k^p\right)^{1/p}$
created: 2026-07-01T23:06:10-04:00
tags:
  - analysis
---
## Definition
A **power mean** is a *mean* of form $$M_p(a_1,a_2,...,a_n) \equiv \left(\frac{1}{n} \sum_{k=1}^n a_k^p\right)^{1/p}$$
where $p \in \mathbb{R}\setminus \{0\}$, and $a_k \geq 0$


## Notes
- sometimes given as $p$ as an affinely extended real number (reals and positive/negative infinity), in which case, for positive and negative infinity, and 0, the limits are taken
- special cases
	- $M_{-\infty}= \lim_{p \to -\infty} M_p(a_1,a_2,...,a_n) = \min(a_1,a_2,...,a_n)$, minimum
	- $M_1$, arithmetic mean
	- etc...

___
## References
1. https://mathworld.wolfram.com/PowerMean.html
2. https://en.wikipedia.org/wiki/Generalized_mean
3. https://www.sciencedirect.com/science/article/pii/S0024379520304316

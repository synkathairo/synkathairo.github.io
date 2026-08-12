---
layout: entry
title: geometric distribution
aliases:
type:
  - definition
  - probability_distribution
reference:
course:
  - ECE6303
lecture:
statement: $P(X=x) = (1-p)^{x-1}p$
created: 2025-04-10T23:02:44-04:00
tags:
  - probability
  - statistics
---

## Definition

In a series of [[Bernoulli distribution|Bernoulli trials]], [[random variable]] $X$ that equals the number of trials needed to have the first success (that the $x$-th trial is the first success) is a **geometric random variable** with parameter $0 < p <1$, where [[probability mass function]] is given by
$$P(X=x) = (1-p)^{x-1}p$$
for $x = 1,2,...$

## See also

- _negative binomial_

---

## References

1. https://gauss.vaniercollege.qc.ca/~maks/H22_HTH/Notes/L15_HTH_Mak.pdf
2. https://en.wikipedia.org/wiki/Geometric_distribution
3. https://mathworld.wolfram.com/GeometricDistribution.html

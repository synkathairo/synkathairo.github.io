---
layout: entry
title: law of the unconscious statistician
aliases:
  - LOTUS
type:
  - theorem
reference:
course:
lecture:
statement:
created: 2025-04-12T19:43:02-04:00
tags:
  - statistics
  - probability
---

## Theorem

Suppose a [[random variable]] $X$.

If a _probability distribution_ of $X$ is _discrete_, and one knows its [[probability mass function]] $p_X$, then [[expectation|expected value]] of $g(X)$ is
$$\mathbb{E}[g(X)] = \sum_x g(x) p_X(x)$$

If a _probability distribution_ of $X$ is _continuous_, and one knows its [[probability density function]] $f_X(x)$, then [[expectation|expected value]] of $g(X)$ is
$$\mathbb{E}[g(X)] = \int _{-\infty }^{\infty }g(x)f_{X}(x)\,\mathrm {d} x$$

---

## References

1. https://en.wikipedia.org/wiki/Law_of_the_unconscious_statistician

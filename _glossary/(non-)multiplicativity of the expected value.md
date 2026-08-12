---
layout: entry
title: (non-)multiplicativity of the expected value
type:
  - theorem
reference:
lecture:
  - cs6763-1
statement: if $X$ and $Y$ independent, $\mathrm{E}(X\,Y) = \mathrm{E}(X) \, \mathrm{E}(Y)$
created: 2023-10-12T18:48:21-04:00
course:
  - CS6763
tags:
---

## Theorem

If two random variables $X$ and $Y$ are [[independence|independent]], the [[expectation|expected value]] is multiplicative, i.e.
$$\mathrm{E}(X\,Y) = \mathrm{E}(X) \, \mathrm{E}(Y)$$

If two random variables $X$ and $Y$ are dependent, the expected value is not necessarily multiplicative, i.e. there exist $X$ and $Y$ such that
$$\mathrm{E}(X\,Y) \neq \mathrm{E}(X) \, \mathrm{E}(Y)$$

---

Compare: https://en.wikipedia.org/wiki/Distribution_of_the_product_of_two_random_variables

---

References:

1. https://statproofbook.github.io/P/mean-mult.html

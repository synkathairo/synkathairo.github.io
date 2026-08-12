---
layout: entry
title: convergence in distribution
aliases:
type:
  - definition
reference:
course:
  - ECE6303
lecture:
  - ece6303-11
statement:
created: 2025-04-22T22:37:58-04:00
tags:
  - probability
---

## Definition

Suppose _sequence_ $X_1, X_2,...$ has [[cumulative distribution function|cdf]] $F_n(x)$, and [[random variable]] $X$ has _cdf_ $F(x)$. The sequence is said to **converge in distribution** (d) to $X$, i.e. $X_n \ \xrightarrow{d}\ X$, if
$$\lim_{n \to \infty} F_n(x) = F(x)$$
for all $x$ at which $F(x)$ is [[continuous function|continuous]].

---

## References

1. https://www.probabilitycourse.com/chapter7/7_2_4_convergence_in_distribution.php

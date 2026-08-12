---
layout: entry
title: negligible function
aliases:
type:
  - definition
reference:
course:
  - CSCI3210
lecture:
  - csci3210-6
statement: $\varepsilon = \operatorname{negl}(n)$ if $\varepsilon = \frac{1}{n^{\omega(1)}} \iff \forall c > 0$ , $\varepsilon(n) = \frac{1}{\Omega(n^c)} \iff \forall c > 0, \exists n_0 \text{ s.t. } \forall n > n_0, \varepsilon(n) \leq \frac{1}{n^c}$
created: 2024-12-05T17:47:35-05:00
tags:
---

## Definition

$\varepsilon = \operatorname{negl}(n)$ if $\varepsilon = \frac{1}{n^{\omega(1)}} \iff \forall c > 0$ , $\varepsilon(n) = \frac{1}{\Omega(n^c)} \iff \forall c > 0, \exists n_0 \text{ s.t. } \forall n > n_0, \varepsilon(n) \leq \frac{1}{n^c}$

---

## References

1. https://www.khoury.northeastern.edu/home/wichs/class/crypto-fall17/lecture4.pdf

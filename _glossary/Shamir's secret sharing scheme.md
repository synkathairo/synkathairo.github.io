---
layout: entry
title: Shamir's secret sharing scheme
aliases:
  - Shamir secret sharing
type:
  - definition
reference:
course:
  - CSCI3210
lecture:
  - csci3210-4
statement:
created: 2024-10-31T18:24:32-04:00
tags:
  - cryptography
---

## Definition

**Shamir secret sharing** is a [[t-out-of-n threshold secret-sharing scheme|threshold secret-sharing scheme]].

Construct, for $n$ parties, $t < n$ threshold, $\mathcal{M} = \mathbb{Z}_q$ message space, $\mathcal{S} = \mathbb{Z}_q$ share space, $q$ prime such that $q > n$, (or replace $\mathbb{Z}_q$ with any [[finite field]]),

- Share: input $m$
  - $t$ random coefficients $c_1,...,c_n$, $c_0 = m$
  - define polynomial $p(x) = \sum_{j=0}^t c_j x^j$
  - output $s_i = p(i)$ for each party $i$
- Recover: on input $(1,s_1),...,(n,s_n)$
  - [[Lagrange interpolating polynomial|Lagrange interpolation]]

---

## References

1. https://joyofcryptography.com/pdf/chap3.pdf
2. https://www.ccs.neu.edu/home/wichs/class/crypto-fall17/lecture2.pdf
3. https://www.ccs.neu.edu/home/wichs/class/crypto-fall17/lecture3.pdf
4. https://en.wikipedia.org/wiki/Secret_sharing
5. https://manpages.ubuntu.com/manpages/questing/man7/gfshare.7.html

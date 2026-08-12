---
layout: entry
title: Schwartz-Zippel lemma
aliases:
type:
  - theorem
  - lemma
reference:
course:
lecture:
statement:
created: 2026-02-25T20:28:20-05:00
tags:
  - algebra
  - cryptography
---

## Lemma

Suppose $f$ is an $m$-variate [[polynomial]] of [[degree]] exactly $d$ over [[field]] $\mathbb{F}$, where $f$ is not [[identically zero]]. Then, the number of zeros of $f$ is at most $d \cdot | \mathbb{F} |^{m-1}$, i.e. $$\Pr_{x \in \mathbb{F}^m} [f(x) = 0] \leq \frac{d}{|\mathbb{F}|}$$

---

## References

1. J. T. Schwartz. Fast probabilistic algorithms for verification of polynomial identities. _Journal of the ACM_, 27(4):701–717, 1980.
2. R. Zippel. Probabilistic algorithms for sparse polynomials. In _In Proceedings of the International Symposiumon on Symbolic and Algebraic Computation_, pages 216–226, 1979.
3. Moshkovitz, D. (2010, July). An alternative proof of the Schwartz-Zippel lemma. In _Electronic Colloquium on Computational Complexity (ECCC)_ (Vol. 17, No. 96, p. 34).
4. https://en.wikipedia.org/wiki/Schwartz%E2%80%93Zippel_lemma
5. https://cstheory.stackexchange.com/questions/1772/alternative-proofs-of-schwartz-zippel-lemma

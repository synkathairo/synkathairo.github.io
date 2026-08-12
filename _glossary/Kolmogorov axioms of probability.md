---
layout: entry
title: Kolmogorov axioms of probability
aliases:
  - three axioms of probability
  - probability axioms
type:
  - definition
  - axioms
reference:
course:
  - ECE6303
lecture:
  - ece6303-1
statement:
created: 2025-04-13T17:43:44-04:00
tags:
  - probability
  - statistics
---

## Axioms

Suppose _sample space_ $\Omega$, _event space_ $\mathcal{E}$, probability measure $P$, $P(E)$ _probability_ of _event_ $E \in \mathcal{E}$ (i.e., [[probability space]] $(\Omega, \mathcal{E},P)$). Then, hold the following axioms

1. $P(E) \geq 0$ for any $E \in \mathcal{E}$, $P(E) \in \mathbb{R}$
2. $P(\Omega) = 1$ (probability of _universal set_ i.e. set of all outcomes is $1$)
3. If $A \cap B = \emptyset$ (i.e. events $A$ and $B$ are _mutually exclusive_), then $P(A \cup B) = P(A) + P(B)$
   - more generally (_σ-additivity_): probability of countable sequence of _disjoint_ (_mutually exclusive_) events $E_1, E_2, ...$ is equal to the sum of probability of the individual events, i.e. $P\left( \bigcup_{i=1}^\infty E_i \right) = \sum_{i=1}^\infty P(E_i)$

---

## References

1. Soch, Joram, et al. (2024). StatProofBook/StatProofBook.github.io: The Book of Statistical Proofs (Version 2023). Zenodo. [https://doi.org/10.5281/ZENODO.4305949](https://doi.org/10.5281/ZENODO.4305949)
   - https://statproofbook.github.io/D/prob-ax.html
2. https://en.wikipedia.org/wiki/Probability_axioms

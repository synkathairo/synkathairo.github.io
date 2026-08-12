---
layout: entry
title: pseudorandom generator
aliases:
  - PRG
type:
  - definition
reference:
course:
  - CSCI3210
lecture:
  - csci3210-7
statement:
created: 2024-11-21T18:02:10-05:00
tags:
---

## Definition

$\{G: \{0,1\}^n \to \{0,1\}^{\ell(n)}\}_{n=1}^\infty$ is a **pseudorandom generator** (_PRG_) if

- (_efficient_): $G$ runs in (deterministic) [[class P|polynomial time]]
- (_expanding_): $\forall n, \ell(n) > n$
- (_pseudorandom_): $G(\mathcal{U}_n) \approx \mathcal{U}_{\ell(n)}$
  - ($\{G(\mathcal{U}_n)\}_{n=1}^\infty \approx \{\mathcal{U}_{\ell(n)}\}_{n=1}^\infty$)
  - (where $\mathcal{U}$ is a [[uniform distribution]] on $\{0,1\}^n$, and $\approx$ means [[computationally indistinguishable]])

---

## References

1. https://www.cs.cmu.edu/~odonnell/complexity/docs/lecture16.pdf

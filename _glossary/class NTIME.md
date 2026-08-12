---
layout: page
title: class NTIME
aliases:
  - NTIME
type:
reference:
course:
lecture:
statement:
created: 2025-02-02T21:42:37-05:00
tags:
  - complexity_theory
---
## Definition
For every function $T : \mathbb{N} \to \mathbb{N}$ and [[decision problem|language]] $L \subseteq \{0,1\}^*$, say that $L \in \mathbf{NTIME}(T(n))$ if there is a constant $c > 0$ and $c \cdot T(n)$-time [[non-deterministic Turing Machine|NDTM]] $M$ such that for every $x \in \{0,1\}^*$, $x \in L \iff M(x) = 1$.

In other words, $\mathbf{NTIME}(T(n)) = \{L | L \text{ is a language decided by an } O(T(n)) \text{ NDTM}\}$

## See also
- [[non-deterministic Turing Machine|NDTM]]
- [[class NP|NP]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 41.
2. M. Sipser, _Introduction to the theory of computation_, Third edition, International edition. Cengage Learning, 2013, p. 295.
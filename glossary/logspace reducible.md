---
layout: entry
title: logspace reducible
aliases:
  - logspace reduction
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-11-12T16:28:25-05:00
tags:
  - complexity_theory
---

## Definition

A [[decision problem|language]] $B$ is **logspace reducible** to _language_ $C$, denoted $B \leq_l C$, if there is a function $f: \{0,1\}^* \to \{0,1\}^*$ that is [[implicitly logspace computable]] and $x \in B$ iff $f(x) \in C$ for every $x \in \{0,1\}^*$

## See also

- compare [[polynomial-time Karp reducible|Karp reduction]]
- [[polynomial-time Karp reducible|many-to-one reducibility]]
- [[Levin reduction]]

---

## References

1. S. Arora, B. Barak. _Computational Complexity: A Modern Approach_, Cambridge University Press, 2009, p. 88.

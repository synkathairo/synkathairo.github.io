---
layout: entry
title: k-round interaction
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-07-24T15:52:55-04:00
tags:
  - complexity_theory
---

## Definition (_interaction of deterministic functions_)

Let $f,g : \{0,1\}^* \to \{0,1\}^*$ be functions. Then, a **$k$-round interaction** of $f$ and $g$ on input $x \in \{0,1\}^*$, denoted by $\langle f, g \rangle(x)$ is the sequence of the following strings $a_1,...,a_k \in \{0,1\}^*$ defined as follows:

- $a_1 = f(x)$
- $a_2 = g(x,a_1)$
- $...$
- $a_{2i+1} = f(x,a_1,...,a_{2i})$
- $a_{2i+2} = f(x,a_1,...,a_{2i+1})$

---

## References

1. https://www.cs.princeton.edu/courses/archive/spr06/cos522/ip.pdf

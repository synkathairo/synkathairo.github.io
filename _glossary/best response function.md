---
layout: page
title: best response function
aliases: 
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-3
  - ece6263-4
statement: 
created: 2024-11-17T17:00:16-05:00
tags:
---
## Definition
Define best response function $BR(s_1, s_2, ..., s_N) = (BR_1(s_{-1}),...,BR_N(s_{-N}))$, $BR : S \to S$, where $S = S_1 \times S_2 \times ... \times S_N$. 

$BR_i(s_{-i})$ is the set of maximizers of the continuous function $u_i(\cdot, s_{-i})$ on the compact set $s_i$. $\implies$ existence by [[Weierstrass extreme value theorem|Weierstrass theorem]]

## Lemma
If the sets $S_1, ..., S_N$ are nonempty sets, $S_i$, $i \in N$, [[compact set|compact]] and [[convex set|convex]], and $u_i(\cdot)$ is [[continuous function|continuous]] in $(s_1,...,s_n)$ and concave in $s_i \in S_i$, then $BR_i(\cdot)$ ([[best response function]]) is nonempty, convex-valued, and u.h.c.

By the lemma, $BR(\cdot)$ is nonempty, convex-valued, [[upper hemicontinuity|u.h.c.]],
[[Kakutani fixed-point theorem]] says $\exists$ a fixed point $s \in BR(s) \iff s_i \in BR_i(s_{-i}) \iff u_i(s_i,s_{-i}) \geq u_i(s_i', s_{-i}) \quad \forall s_i \in S_i$.


___
## References
1. https://web.stanford.edu/~rjohari/teaching/notes/246_lecture7_2007.pdf

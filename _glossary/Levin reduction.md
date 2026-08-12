---
layout: entry
title: Levin reduction
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-11-11T16:38:29-05:00
tags:
  - complexity_theory
---
## Definition
If $R_1$ and $R_2$ are [[search problem|search problems]] and $\mathscr{C}$ is a *complexity class* then a $\mathscr{C}$ **Levin reduction** of $R_1$ to $R_2$ consists of three functions $g_1, g_2, g_3 \in \mathscr{C}$  satisfying
- $g_1$ is a $\mathscr{C}$ [[polynomial-time Karp reducible|Karp reduction]] of $L(R_1)$ to $L(R_2)$
- if $R_1(x,y)$ then $R_2(f(x),g(x,y)$
- if $R_2(f(x),z)$ then $R_1(x,h(x,z))$

May denote [[class P|P]] *Levin reduction* as simply *Levin reduction*.

## See also

- [[polynomial-time Karp reducible|Karp reduction]]
- [[Cook reduction]]

___
## References
1. https://planetmath.org/levinreduction
2. https://cs.stackexchange.com/questions/2689/is-karp-reduction-identical-to-levin-reduction

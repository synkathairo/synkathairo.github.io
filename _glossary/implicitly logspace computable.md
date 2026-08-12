---
layout: page
title: implicitly logspace computable
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-11-12T16:13:16-05:00
tags:
  - complexity_theory
---
## Definition
A function $f: \{0,1\}^* \to \{0,1\}^*$ is **implicitly logspace computable**, if $f$ is *polynomially bounded* (i.e. exists $c$ such that $|f(x)| \leq |x|^c$ for every $x \in \{0,1\}^*$) and the languages $L_f = \{ \langle x,i \rangle \mid f(x)_i = 1\}$ and $L_f' = \{ \langle x,i \rangle \mid f(x)_i = 1\}$ are in [[class L|L]].

## Notes
- reduction $f$ is *implicitly computable* in [[class L|logarithmic space]] in the sense that there is an $O(\log \lvert x \rvert)$-space machine that on input $\langle x,i \rangle$ outputs $f(x)_i$ provided that $i \leq |f(x)|$
- logspace machine might not even have memory to write down its output, so it should be able to compute any desired bit of output in logarithmic space

## See also
- [[logspace reducible]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 88.

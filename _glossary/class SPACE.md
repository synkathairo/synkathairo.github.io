---
layout: page
title: class SPACE
aliases:
  - SPACE
  - space-bounded computation
type:
reference:
course:
lecture:
statement:
created: 2025-11-11T19:06:49-05:00
tags:
  - complexity_theory
---
## Definition (*space-bounded computation*)
Let $S : \mathbb{N} \to \mathbb{N}$ and $L \in \{0,1\}^*$. Say that [[decision problem|language]] $L \in \mathbf{SPACE}(s(n))$ if there is a constant $c$ and [[Turing machine|TM]] $M$ [[effectively decidable|deciding]] $L$ such that at most $c \cdot s(n)$ locations on $M$'s work tapes (excluding input tape) are ever visited by $M$'s head during computation on every input of length $n$.

## Notes
- Similarly, [[class NSPACE|NSPACE]] for [[non-deterministic Turing Machine|NDTM]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 78-79.
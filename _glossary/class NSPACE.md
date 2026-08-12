---
layout: page
title: class NSPACE
aliases:
  - NSPACE
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-11-12T16:20:56-05:00
tags:
  - complexity_theory
---
## Definition (*space-bounded computation*)
Let $S : \mathbb{N} \to \mathbb{N}$ and $L \in \{0,1\}^*$. Say that [[decision problem|language]] $L \in \mathbf{NSPACE}(s(n))$ if there is a [[non-deterministic Turing Machine|NDTM]] $M$ [[effectively decidable|deciding]] $L$ that never uses more than $c \cdot s(n)$ nonblank tape locations on length $n$ inputs, for constant $c$, regardless of its nondeterministic choices.

## Notes
- compare [[class SPACE|SPACE]], the deterministic version

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 78-79.
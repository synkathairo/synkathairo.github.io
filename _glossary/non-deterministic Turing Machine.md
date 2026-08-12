---
layout: entry
title: non-deterministic Turing Machine
aliases:
  - NDTM
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-02-02T23:14:51-05:00
tags:
  - complexity_theory
---
## Overview

Compared to standard [[Turing machine|TM]], a **NDTM** has two transition functions $\delta_0$ and $\delta_1$, and a special state $q_{\mathtt{accept}}$.

When *NDTM* $M$ computers a function, it makes an arbitrary choice on which of two transition functions to apply. 

For every input $x$, say that $M(x) =1$ if there exists some sequence of these choices which would make it reach $q_{\mathtt{accept}}$ on input $x$.
Otherwise say $M(x) = 0$ if every sequence of choices makes $M$ halt without reaching $q_{\mathtt{accept}}$.

$M$ runs in $T(n)$ time if for every input $x \in \{0,1\}^*$, and every sequence of nondeterministic choices, $M$ reaches the halting state or $q_{\mathtt{accept}}$ within $T(\lvert x \rvert)$ steps.

## See also

- [[class NP|non-deterministic polynomial time]] (NP)
- [[class NTIME|NTIME]]
- compare [[Turing machine|deterministic Turing machine]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 41.

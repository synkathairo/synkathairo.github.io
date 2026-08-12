---
layout: page
title: Turing machine
aliases:
  - TM
  - 图灵机
  - deterministic Turing machine
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-01-23T17:36:25-05:00
tags:
  - complexity_theory
---
## Definition
A **TM** $M$ is described by a tuple $(\Gamma, Q, \delta)$ containing
- $\Gamma$, [[alphabet]] of $M$, [[finite set]] of symbols that $M$'s tapes can contain. Assume it contains a designated "blank" symbol denoted $\square$, designated "start" symbol denoted $\triangleright$, and numbers $0$ and $1$. 
- $Q$, finite set of possible states $M$'s register can be in. Assume $Q$ contains a designated start state $q_{\mathtt{start}}$ and designated halting state $q_{\mathtt{halt}}$.
- $\delta : Q \times \Gamma^k \to Q \times \Gamma^{k-1} \times \{\mathsf{L},\mathsf{S},\mathsf{R}\}^k$, where $k \geq 2$, *transition function* of $M$, describing rules $M$ uses in performing each step.

## Notes

- **k-tape Turing machine** (TM)

## See also

- [[class DTIME|DTIME]]
- compare [[non-deterministic Turing Machine]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 10-15.
2. https://ics.uci.edu/~goodrich/teach/cs162/notes/turing2.pdf
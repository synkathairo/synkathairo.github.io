---
layout: page
title: class NL
aliases:
  - NL
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-11-12T16:14:14-05:00
tags:
  - complexity_theory
---
## Definition
$\mathbf{NL} =$ [[class NSPACE|NSPACE]]$(\log n)$

(for given [[decision problem|language]])

## Definition
A [[decision problem|language]] $L$ is in $\mathbf{NL}$ if there exists a deterministic [[Turing machine|TM]] $M$ (the *verifier*) with additional special read-once input tape, and polynomial $p: \mathbb{N} \to \mathbb{N}$ such that for every $x \in \{0,1\}^*$, $$x \in L \iff \exists u \in \{0,1\}^{p(|x|)} \text{ s.t. } M(x,u) = 1$$ where $M(x,u)$ denotes output of $M$ where $x$ is placed on input tape, and $u$ is placed on special read-once tape, and $M$ uses at most $O(\log |x|)$ space on its read-write tapes for every input $x$.

(read once head, certificate tape)

## Notes
- say [[decision problem|language]] $C$ is $\mathbf{NL}$-complete if it is in $\mathbf{NL}$ and for every $B \in \mathbf{NL}$, $B \leq_l C$ ([[logspace reducible|logspace reduction]]) 

## See also
- [[class L|L]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 81, 90.
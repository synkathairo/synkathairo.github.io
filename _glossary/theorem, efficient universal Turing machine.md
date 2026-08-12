---
layout: page
title: theorem, efficient universal Turing machine
aliases:
  - efficient universal Turing machine
type:
  - theorem
reference: 
course: 
lecture: 
statement: 
created: 2025-01-27T22:47:01-05:00
tags:
  - complexity_theory
---
## Theorem
There exists a [[Turing machine|TM]] $\mathcal{U}$ such that for every $x, \alpha \in \{0,1\}^*$, $\mathcal{U}(x,\alpha) = M_\alpha(x)$, where $M_\alpha$ denotes the *TM* represented by $\alpha$.
Moreover, if $M_\alpha$ halts on input $x$ within $T$ steps then $\mathcal{U}(x,\alpha)$ halts within $CT\log T$ steps, where $C$ is a number independent of $\lvert x \rvert$ and depending only on $M_\alpha$'s alphabet size, and number of states.

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 20.
2. https://www.cs.princeton.edu/courses/archive/spr06/cos522/lec2.pdf
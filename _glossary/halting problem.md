---
layout: entry
title: halting problem
aliases:
  - HALT
  - 停机问题
type:
  - definition
  - computational problem
  - theorem
reference: 
course: 
lecture: 
statement: The function $\mathtt{HALT}$ takes input $\langle \alpha, x \rangle$ and outputs $1$ iff [[Turing machine|TM]] $M_\alpha$ represented by $\alpha$ halts on input $x$ within a finite number of steps.
created: 2025-01-23T17:50:02-05:00
tags:
  - complexity_theory
---
## Definition

The function $\mathtt{HALT}$ takes input $\langle \alpha, x \rangle$ and outputs $1$ iff [[Turing machine|TM]] $M_\alpha$ represented by $\alpha$ halts on input $x$ within a finite number of steps.

## Theorem

$\mathtt{HALT}$ is not [[effectively computable|computable]] by any [[Turing machine|TM]].

## See also

- [[Theorem, Turing machine non-computable function]]
- [[Rice's theorem]]
- [[Lawvere's fixed-point theorem]]

___
## References

1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 22-23.
2. N. D. Jones, _Computability and complexity: from a programming perspective_. in Foundations of computing. Cambridge, Mass: MIT Press, 1997, pp. 16-17.

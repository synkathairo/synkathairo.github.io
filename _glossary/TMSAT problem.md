---
layout: entry
title: TMSAT problem
aliases: 
type:
  - definition
reference: 
course: 
lecture: 
statement: "$\\mathtt{TMSAT} = \\{\\langle \\alpha, x, 1^n, 1^t \\rangle : \\exists u \\in \\{0,1\\}^n \\text{ s.t. } M_\\alpha \\text{ outputs } 1 \\text{ on input } \\langle x, u \\rangle \\text{ within } t \\text{ steps}\\}$"
created: 2025-02-04T17:43:00-05:00
tags:
  - complexity_theory
---
## Definition
$\mathtt{TMSAT} = \{\langle \alpha, x, 1^n, 1^t \rangle : \exists u \in \{0,1\}^n \text{ s.t. } M_\alpha \text{ outputs } 1 \text{ on input } \langle x, u \rangle \text{ within } t \text{ steps}\}$
where $M_\alpha$ denotes the (deterministic) [[Turing machine|TM]] represented by string $\alpha$. 

## Theorem
$\mathtt{TMSAT}$ is [[class NP-complete|NP-complete]].

### Proof
Let $L$ be a [[class NP|NP]] [[decision problem|language]]. Then $\exists p$ polynomial and verifier [[Turing machine|TM]] $M$ s.t. $x \in L$ iff $\exists u \{0,1\}^{p(\lvert x \rvert)}$ string satisfying $M(x,u) = 1$ and $M$ runs in time $q(n)$ for some polynomial $q$.

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 43.
2. https://www.cs.princeton.edu/courses/archive/spr06/cos522/lec2.pdf
3. https://webdocs.cs.ualberta.ca/~zacharyf/courses/complexity_2019/notes/complexity-w19-lec04.pdf

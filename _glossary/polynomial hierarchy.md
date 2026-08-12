---
layout: entry
title: polynomial hierarchy
aliases:
  - polynomial-time hierarchy
  - PH
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-11T20:17:58-04:00
tags:
  - complexity_theory
---
## Definition

For $i \geq 1$, [[decision problem|language]] $L$ is in $\mathbf{\Sigma}_i^p$ if there exists a [[class P|polynomial time]] [[Turing machine|TM]] $M$ and *polynomial* $q$ such that $$x \in L \iff \exists u_{1} \in \{0,1\}^{q(|x|)} \forall u_2 \in \{0,1\}^{q(|x|)}... Q_i u_i \in \{0,1\}^{q(|x|)} M(x,u_1,...,u_i)=1$$ where $Q_i$ denotes ([[quantifier]]) $\forall$ or $\exists$ depending on whether $i$ is even or odd, respectively.

Then the **polynomial hierarchy** is the set $\mathbf{PH} = \cup_i \mathbf{\Sigma}_i^p$.



## See also

- [[Fagin's theorem]]
- [[class PSPACE|PSPACE]]
- [[existential second-order logic|ESO]]
- [[class P|P]]
- [[class NP|NP]]
- [[P versus NP problem]]

___
## References

1. https://en.wikipedia.org/wiki/Polynomial_hierarchy
2. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 95-104.
3. https://www.cl.cam.ac.uk/teaching/0910/L15/handout5.pdf

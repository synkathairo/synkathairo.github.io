---
layout: page
title: class P
aliases:
  - class P
  - PTIME
  - polynomial-time algorithm
  - P
  - polynomial time
  - poly-time
type:
  - definition
  - complexity class
reference: 
course: 
lecture: 
statement: The class $\mathbf{P}$ may be defined as $\mathbf{P} = \cup_{c \geq 1} \mathbf{DTIME}(n^c)$.
created: 2025-01-23T15:39:06-05:00
tags:
  - complexity_theory
---
## Definition
The class $\mathbf{P}$ may be defined as $\mathbf{P} = \cup_{c \geq 1} \mathbf{DTIME}(n^c)$. 

(see [[class DTIME|DTIME]] definition)

In other words, $\mathbf{P}$ is the set of [[decision problem|languages]] $L$ such that there exists a *polynomial-time* algorithm $A$ with $x \in L \iff A(x) = 1$.

## Notes
- a notion of "efficient computation", equated with *polynomial* running time
- It is known that $\mathbf{P} \subseteq \mathbf{NP}$ and $\mathbf{P} \subseteq \mathbf{coNP}$ (see [[class NP|NP]] and [[class coNP|coNP]])

## See also

- *Cobham-Edmonds thesis*
- [[polynomial hierarchy|PH]]
- [[class FPT|FPT]]
- [[pseudo-P]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, p. 25.
2. https://web.stanford.edu/class/archive/cs/cs103/cs103.1132/lectures/26/Slides26.pdf
3. https://people.csail.mit.edu/dmoshkov/courses/adv-comp/scribe1.pdf
4. https://mathworld.wolfram.com/PolynomialTime.html
5. https://complexityzoo.net/Complexity_Zoo:P
6. https://www.math.ias.edu/avi/book
---
layout: entry
title: class BPP
aliases:
  - BPP
  - bounded-error probabilistic polynomial time
  - class almost-P
  - almost-P
type:
  - definition
  - time complexity
reference:
course:
lecture:
statement:
created: 2025-02-02T21:47:55-05:00
tags:
  - complexity_theory
---
## Definition (*BPP*)

**BPP** (*bounded-error probabilistic polynomial time*) is the set of [[decision problem|languages]] that can be solved by [[probabilistic Turing machine]] in [[class P|polynomial time]] with *probability* $\geq \frac{2}{3}$ of accepting an input in the language and *probability* $\geq \frac{2}{3}$ of rejecting an input not in the language

## Definition (*almost-P*)

class of problems that are in $\mathbf{P}^A$ with probability $1$, where $A$ is an [[oracle machine|oracle]] chosen uniformly at random

## Notes

- $\mathbf{P} \subseteq \mathbf{BPP}$ is known
	- (obvious, as it has probability $1 \geq \frac{2}{3}$ of accepting/rejecting inputs correctly)
	- deterministic TM is special case of probabilistic TM
- *PRIMES is in P* paper (AKS2004) shows that the problem of determining whether a given number is prime is in $\mathbf{P}$ (previously known to be in $\mathbf{BPP}$)
- conjectured that $\mathbf{P} = \mathbf{BPP}$
- $\mathbf{BPP} \subseteq \mathbf{BQP} \subseteq$ [[class PPT|PP]]
	- $\mathbf{PP}$ allows greater error probability of up to $\frac{1}{2}$ rather than $\frac{1}{3}$
- almost-P and BPP equivalence was shown by Bennett and Gill in 1981

___
## References

1. https://en.wikipedia.org/wiki/BPP_(complexity)
2. <https://www.cs.cmu.edu/~goyal/s18/15503/scribe_notes/lecture3.pdf>
3. https://complexityzoo.net/Complexity_Zoo:B#bpp
4. https://complexityzoo.net/Complexity_Zoo:A#almostp
5. C. H. Bennett and J. Gill, “Relative to a Random Oracle _A_ , ${\bf P}^A \ne {\bf NP}^A \ne \text{co-}{\bf NP}^A$ with Probability 1,” _SIAM J. Comput._, vol. 10, no. 1, pp. 96–113, Feb. 1981, doi: 10.1137/0210008.

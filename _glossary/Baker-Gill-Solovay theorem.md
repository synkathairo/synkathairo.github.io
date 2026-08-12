---
layout: page
title: Baker-Gill-Solovay theorem
aliases:
type:
  - theorem
reference:
course:
lecture:
statement: There exists *oracles* $A,B$ such that $\mathbf{P}^A = \mathbf{NP}^A$ and $\mathbf{P}^B \neq \mathbf{NP}^B$.
created: 2025-11-06T19:12:11-05:00
tags:
  - complexity_theory
---
## Theorem
There exists [[oracle machine|oracles]] $A,B$ such that $\mathbf{P}^A = \mathbf{NP}^A$ and $\mathbf{P}^B \neq \mathbf{NP}^B$.

(where $\mathbf{P}^O$ is the set containing every [[decision problem|language]] that can be decided by [[class P|polynomial time]] [[Turing machine|deterministic Turing machine]] with *oracle* access to $O$, and $\mathbf{NP}^O$ that which can be decided by *polynomial time* [[non-deterministic Turing Machine]] with oracle access to $O$, these are [[relativized complexity class|relativized complexity classes]])

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 74-75.
2. T. Baker, J. Gill, and R. Solovay, “Relativizations of the $\mathcal{P} = ?\mathcal{NP}$ Question,” _SIAM J. Comput._, vol. 4, no. 4, pp. 431–442, Dec. 1975, doi: 10.1137/0204037.
3. https://cstheory.stackexchange.com/questions/21663/baker-gill-solovay-pb-ne-npb-relativization-what-class-is-b-in
4. https://courses.cs.cornell.edu/cs6810/2023fa/lec6.pdf
5. https://faculty.cc.gatech.edu/~ladha/toc/L21.pdf
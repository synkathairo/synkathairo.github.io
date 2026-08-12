---
layout: page
title: INDSET problem
aliases:
  - INDSET
  - independent set problem
  - ‌独立集问题
type:
  - definition
  - computational problem
reference: 
course: 
lecture: 
statement: "$\\mathtt{INDSET} = \\{\\langle G,k\\rangle : \\exists S \\subseteq V(G) \\text{ s.t. } \\lvert S \\rvert \\geq k \\text{ and } \\forall u, v \\in S, \\overline{uv} \\notin E(G)\\}$"
created: 2025-01-23T17:15:23-05:00
tags:
  - complexity_theory
---
## Definition (decision problem)
Consider the problem of finding a maximum sized *independent set* ([[set]] of vertices without any common edges) in a graph. The corresponding [[decision problem|language]] is 
$$\mathtt{INDSET} = \{\langle G,k\rangle : \exists S \subseteq V(G) \text{ s.t. } \lvert S \rvert \geq k \text{ and } \forall u, v \in S, \overline{uv} \notin E(G)\}$$
Algorithm to solve this language will tell, on inputting [[undirected graph|graph]] $G$ and number $k$, where there exists an independent set of size at least $k$.

## Notes

- $\mathtt{INDSET} \in$ [[class NP|NP]]
	- in fact, $\mathtt{INDSET} \in$ [[class NP-complete|NP-C]]

___
## References
1. S. Arora, B. Barak. *Computational Complexity: A Modern Approach*, Cambridge University Press, 2009, pp. 3, 39.
2. <https://web.stanford.edu/class/archive/cs/cs103/cs103.1142/lectures/28/Small28.pdf>
3. <https://people.engr.tamu.edu/andreas-klappenecker/csce658-s18/complexity.pdf>
---
layout: page
title: multiplicative spanner
aliases:
  - α-multiplicative spanner
type:
  - definition
reference: 
course:
  - CS9233
lecture: 
statement: 
created: 2025-03-18T17:59:00
tags:
  - approximation_algorithms
  - graph_theory
---
## Definition (*multiplicative spanner*)
[[subgraph spanner|(α,β)-spanner]] where $\beta = 0$. (i.e. an $(\alpha,0)$-**spanner** or $\alpha$-**multiplicative spanner**)

## Theorem (Althöfer-Das-Dobkin-Joseph-Soares 1993)
For every $k \geq 1$, every $n$-node [[undirected graph|graph]] $G$ has a $(2k-1)$-multiplicative spanner $G' \subseteq G$ with $O(n^{1+1/k})$ edges.

## Erdős girth conjecture
For every $k \geq 1$, there exists an $n$-node *graph* with $\Omega(n^{1+1/k})$ edges and *girth* at least $2k+2$. ([[Erdős girth conjecture]]) (unproven beyond small values of $k$)

___
## References
1. https://people.csail.mit.edu/ghaffari/AA18/Notes/S2.pdf
2. I. Althöfer, G. Das, D. Dobkin, D. Joseph, and J. Soares, “On sparse spanners of weighted graphs,” _Discrete Comput Geom_, vol. 9, no. 1, pp. 81–100, Jan. 1993, doi: [10.1007/BF02189308](https://doi.org/10.1007/BF02189308).
3. P. Erdös and L. Moser, “An extremal problem in graph theory,” _J. Aust. Math. Soc._, vol. 11, no. 1, pp. 42–47, Feb. 1970, doi: [10.1017/S1446788700005954](https://doi.org/10.1017/S1446788700005954).
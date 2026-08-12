---
layout: page
title: subgraph spanner
aliases:
  - spanner
  - (α,β)-spanner
  - t-spanner
type:
  - definition
reference: 
course:
  - CS9233
lecture: 
statement: 
created: 2025-03-18T16:34:49-04:00
tags:
  - approximation_algorithms
  - graph_theory
---
## Definition ($(\alpha,\beta)$*-spanner*)

Given $\alpha, \beta \geq 1$, and an arbitrary undirected unweighted *graph* with $n$-nodes $G = (V,E)$, call a *spanning subgraph* $G' \subseteq G$ an $(\alpha,\beta)$-**spanner** of $G$ if for every pair $s,t$ of vertices,
$$\operatorname{dist}_G(s,t) \leq \operatorname{dist}_{G'}(s,t) \leq \alpha \cdot \operatorname{dist}_G(s,t) + \beta$$

A **$t$-spanner** is another name for *$(t,0)$-spanner* (used in some literature), where $t$ is defined as the *stretch factor*.
### Notes
- sparser subgraphs
- $(1,0)$-spanners preserve the graph exactly
- higher values of $\alpha$ and $\beta$ allow deleting more edges (but don't want too high either)
- two extremes:
	- multiplicative sparsification ($\beta = 0$)
		- see [[multiplicative spanner]]
	- additive sparsification ($\alpha = 1$)
- the [[minimum spanning tree]] is the subgraph with the least total edge weight that still connects all the vertices (is [[connectivity|connected]])

___
## References
1. https://people.csail.mit.edu/ghaffari/AA18/Notes/S2.pdf
2. https://web.eecs.umich.edu/~pettie/papers/spanner-journal.pdf
3. I. Althöfer, G. Das, D. Dobkin, D. Joseph, and J. Soares, “On sparse spanners of weighted graphs,” _Discrete Comput Geom_, vol. 9, no. 1, pp. 81–100, Jan. 1993, doi: [10.1007/bf02189308](https://doi.org/10.1007/bf02189308).
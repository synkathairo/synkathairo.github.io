---
layout: page
title: tree decomposition
aliases: 
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-07-29T15:26:30-04:00
tags:
  - graph_theory
---
## Definition (*tree decomposition*)

A **tree decomposition** of a [[undirected graph|graph]] $G(V,E)$ is a [[tree]] $T$ where

1. Each *vertex* (node) $i$ of $T$ is labeled by a *subset* $B_i \subset V$ of *vertices* of $G$, a "bag"
2. Each *edge* of $G$ is in a *subgraph* induced by at least one of the $B_i$ (i.e. is in at least one "bag" of $T$)
3. The *subtree* of $T$ consisting of all "bags" containing $u$ is [[connectivity|connected]], for all vertices $u$ in $G$.

## Definition (*width of tree decomposition*)

The **width** of a *tree decomposition* is one less than the maximum bag size of that tree decomposition.

___
## References

1. https://math.mit.edu/~apost/courses/18.204-2016/18.204_Gerrod_Voigt_final_paper.pdf
2. https://www.cs.cmu.edu/~odonnell/toolkit13/lecture17.pdf
3. https://en.wikipedia.org/wiki/Treewidth
4. https://en.wikipedia.org/wiki/Tree_decomposition
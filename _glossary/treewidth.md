---
layout: entry
title: treewidth
aliases:
  - tree width
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-07-29T15:11:41-04:00
tags:
  - graph_theory
---

## Definition

The **treewidth** of a [[undirected graph|graph]] $G$ is the minimum _width_ of all [[tree decomposition|tree decompositions]] of $G$.

alternatively,

The **treewidth** of [[undirected graph|graph]] $G(V,E)$ is the minimum integer $k$ such that there exists a [[tree decomposition]] of $G(V,E)$ with "bags" of size at most $k+1$

## Notes

- _graphs_ with minimum _treewidth_ of $1$ are [[tree|trees]]
- every _graph_ with _treewidth_ $k$ has a _vertex_ of degree at most $k$
- a $n$-vertex _graph_ has _treewidth_ $(n-1)$ iff it is a [[clique]]
- _graph_ $G$ has _treewidth_ at most $1$ iff it is a [[forest]]
- _treewidth_ may also be defined in terms of [[chordal graph|chordal graphs]]
- determining the exact _treewidth_ of a graph is [[class NP-hard|NP-hard]], but there exists algorithms that can determine if it is at most $k$ in time $O(n^k)$

---

## References

1. https://math.mit.edu/~apost/courses/18.204-2016/18.204_Gerrod_Voigt_final_paper.pdf
2. https://www.cs.cmu.edu/~odonnell/toolkit13/lecture17.pdf
3. https://en.wikipedia.org/wiki/Treewidth
4. https://courses.grainger.illinois.edu/cs474/fa2021/fa2020Notes/TreeDecompositions.pdf

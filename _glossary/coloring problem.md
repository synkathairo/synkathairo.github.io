---
layout: page
title: coloring problem
aliases:
  - colouring problem
  - minimum coloring problem
  - k-coloring problem
  - graph coloring
  - graph coloring problem
  - 图着色问题
type:
  - definition
  - computational problem
reference: 
course: 
lecture: 
statement: 
created: 2025-05-20T18:03:07-04:00
tags:
  - complexity_theory
---
## Definition
Given [[undirected graph|graph]] $G(V,E)$, the **coloring problem** asks for an assignment of $k$ *colors* to vertices $c: V \to \{1,2,...,k\}$. A coloring is **proper** if adjacent vertices receive different *colors*, i.e. $\forall (u,v) \in E$, $c(u) \neq c(v)$.

The **minimum coloring problem** asks for the smallest $k$ to properly *color* $G$.

The **k-coloring problem** asks whether $G$ can be *properly colored* using $k$ *colors*.

We call the subset of vertices receiving the same *color* a **color class**. In a *proper coloring* every *color class* is an [[independent set]] (i.e. no two vertices in the set are *adjacent*, meaning no two vertices in the set share an edge).

The **chromatic number** of a graph is the smallest $k$ such that $G$ admits a *k-proper coloring*.

## 3-coloring
Theorem, *3-coloring* is [[class NP-complete|NP-complete]].

[[k-SAT problem|3SAT]]

___
## References
1. https://www.cs.toronto.edu/~lalla/373s16/notes/3col.pdf

---
layout: entry
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

Given [[undirected graph|graph]] $G(V,E)$, the **coloring problem** asks for an assignment of $k$ _colors_ to vertices $c: V \to \{1,2,...,k\}$. A coloring is **proper** if adjacent vertices receive different _colors_, i.e. $\forall (u,v) \in E$, $c(u) \neq c(v)$.

The **minimum coloring problem** asks for the smallest $k$ to properly _color_ $G$.

The **k-coloring problem** asks whether $G$ can be _properly colored_ using $k$ _colors_.

We call the subset of vertices receiving the same _color_ a **color class**. In a _proper coloring_ every _color class_ is an [[independent set]] (i.e. no two vertices in the set are _adjacent_, meaning no two vertices in the set share an edge).

The **chromatic number** of a graph is the smallest $k$ such that $G$ admits a _k-proper coloring_.

## 3-coloring

Theorem, _3-coloring_ is [[class NP-complete|NP-complete]].

[[k-SAT problem|3SAT]]

---

## References

1. https://www.cs.toronto.edu/~lalla/373s16/notes/3col.pdf

---
layout: page
title: linear manifold
aliases:
type:
reference:
course:
lecture:
statement:
created: 2025-11-04T15:16:12-05:00
tags:
  - topology
  - geometry
  - functional_analysis
---
## Definition
Suppose $V$ is a [[vector space]], $L$ is a non-empty *subset* of $V$. If there exists $v \in V$ such that $L + v = \{v+l | l \in L\}$ is a *vector subspace* of $V$, then $L$ is a **linear manifold** of $V$

Say the *dimension* of $L$ i s the dimension of $L+v$ i.e. $\dim L = \dim(L+v)$

## Notes
- in the case $\dim L = \dim V-1$, $L$ is called a [[hyperplane]]
- *linear manifold* in other words is a [[linear subspace]] possibly shifted away from the origin
	- in $\mathbb{R}^2$, examples are points, lines (hyperplanes), and $\mathbb{R}^2$ itself
- there are some inconsistent definitions in functional analysis and geometry contexts between different authors, so check terminology
	- e.g. alternatively defined only for [[Hilbert space|Hilbert spaces]] (a type of vector space) specifically, requiring closure under addition of vectors and scalar multiplication (i.e. [[linear subspace]])

## See also
- [[linear subspace|subspace]]

___
## References

1. https://math.stackexchange.com/questions/1613939/what-is-the-difference-between-linear-manifold-and-linear-vector-subspace
2. https://planetmath.org/linearmanifold
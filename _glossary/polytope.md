---
layout: page
title: polytope
aliases:
  - 多胞形
type:
  - definition
reference: 
course:
  - ECE6263
lecture:
  - ece6263-4
statement: A finite region of $n$-dimensional space enclosed by a finite number of hyperplanes.
created: 2024-11-17T20:36:01-05:00
tags:
---
## Definition
A finite region of $n$-dimensional space enclosed by a finite number of hyperplanes.

## Notes
intuitively: the $n$-dimensional generalization of *polyhedra* (3-dimensional) or *polygons* (2-dimensional)

4-dimensional *polytope* is known as a *polychoron*.

Efficient algorithms exist for finding the extreme points of a polytope, e.g. the *simplex algorithm*. This makes it relatively easy to compute [[correlated equilibrium|correlated equilibria]] in contrast to [[Nash equilibrium|Nash equilibria]], which are computationally hard.

___
## See also
- [[simplex]]

## References
1. https://mathworld.wolfram.com/Polytope.html
2. M. Maschler, E. Solan, and Shmuel Zamir, *Game Theory*, Cambridge University Press, 2013, pp. 308-309.
	- see remark 8.2
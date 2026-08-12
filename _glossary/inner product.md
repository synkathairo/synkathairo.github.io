---
layout: entry
title: inner product
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-16T14:27:55-04:00
tags:
  - analysis
---
## Definition

Suppose a *real* [[vector space]], with vectors $u,v,w$ and scalar $\alpha$, then an **inner product** $\langle \cdot, \cdot \rangle$ satisfies properties:
- *bilinearity*
	- $\langle u + v, w \rangle = \langle u, w \rangle + \langle v, w \rangle$
	- $\langle \alpha v, w \rangle = \alpha \langle v,w \rangle$
- *symmetry*
	- $\langle v,w \rangle = \langle w,v \rangle$
- *positive definiteness*
	- $\langle v,v \rangle \geq 0$
	- $\langle v,v \rangle = 0$ iff $v = 0$

## Notes

- generalization of [[dot product]], where $\langle u, v \rangle = v'w = \sum_i v_i w_i$

___
## References

1. https://mathworld.wolfram.com/InnerProduct.html
2. https://people.eecs.berkeley.edu/~bartlett/courses/281b-sp08/7.pdf

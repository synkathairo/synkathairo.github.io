---
layout: entry
title: functional
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-16T18:48:32-04:00
tags:
  - analysis
---
## Definition (*vector spaces*)

A real-valued [[function]] on a [[vector space]] $V$.

$V$ may be a space of functions.

## Definition (*function types*)

In *type theory* with *function types*: given [[type set|type]] $X$, a **functional** of *base type* $X$ is a *term* of type $X^{X^X}$ i.e. $(X \to X) \to X$

(c.f. this type theoretic definition with the above vector space definition used in analysis; does that mean $V$ as endofunctor allows that vector space definition to be a specific case of this type theoretic definition?)

## Notes

- widely used in calculus of variations and functional analysis
- $V$ could for example be (a space of functions such as) $V = \{f:[0,1] \to \mathbb{R}: f \text{ is continuous}\}$
	- then $T(f) = f(0)$ is a [[linear functional]] on $V$

___
## References

1. https://mathworld.wolfram.com/Functional.html
2. https://math.stackexchange.com/questions/325851/difference-between-functional-and-function
3. https://ncatlab.org/nlab/show/functional

---
layout: entry
title: Hilbert space
aliases:
  - 希尔伯特空间
  - Hilbert 空间
  - Hilbertscher Raum
type:
  - definition
reference:
course:
lecture:
statement: vector space over $\mathbb{R}$ with inner product
created: 2025-06-01T20:36:26-04:00
tags:
---
## Definition

A **Hilbert space** is a [[vector space]] $H$ with [[inner product]] $\langle f,g \rangle$ such that the [[norm]] defined by $\lvert f \rvert = \sqrt{\langle f,f \rangle}$ turns $H$ into a [[complete metric space]]

(i.e. [[complete metric space|complete]] [[inner product]] *space*, whereas an *inner product space* may be known as a *pre-Hilbert space*)

## Lean4 definition

> A Hilbert space is a complete normed inner product space.

```lean4
@[variable_alias]
structure HilbertSpace (𝕜 E : Type*) [RCLike 𝕜]
  [NormedAddCommGroup E] [InnerProductSpace 𝕜 E] [CompleteSpace E]
```

(`RCLike`: [[real numbers|real]] $\mathbb{R}$ or [[complex numbers|complex]] $\mathbb{C}$, `NormedAddCommGroup`: [[normed group]], `InnerProductSpace`: extension of `NormedSpace` and `Inner` [[inner product]], `CompleteSpace`: [[complete metric space]])

## Notes

- examples: 
	- [[real numbers]] $\mathbb{R}^n$ with $\langle v,u \rangle$ vector dot product of $v$ and $u$

___
## References
1. https://en.wikipedia.org/wiki/Hilbert_space
2. https://ncatlab.org/nlab/show/Hilbert+space
3. https://ncatlab.org/nlab/show/an+elementary+treatment+of+Hilbert+spaces
4. https://www.bananaspace.org/wiki/Hilbert_%E7%A9%BA%E9%97%B4
5. https://old.reddit.com/r/learnmath/comments/p4rzld/eli5_what_is_hilbert_space/
6. https://mathworld.wolfram.com/HilbertSpace.html
7. https://people.eecs.berkeley.edu/~bartlett/courses/281b-sp08/7.pdf
8. https://leanprover-community.github.io/mathlib4_docs/Mathlib/Analysis/InnerProductSpace/Defs.html#HilbertSpace

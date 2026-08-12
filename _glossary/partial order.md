---
layout: page
title: partial order
aliases:
  - poset
  - 偏序集
  - partially ordered set
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-09T16:04:05-04:00
tags:
  - set_theory
---
## Definition

A *relation* $\leq$ is a **partial order** on a [[set]] $S$ if it satisfies:
- reflexivity: $a \leq a$ for all $a \in S$
- antisymmetry: $a \leq b$ and $b \leq a$ implies $a = b$
- transitivity: $a \leq b$ and $b \leq c$ implies $a \leq c$

A **partially ordered set** (*poset*) is an ordered pair $P = (X, \leq)$ consisting of a set $X$ (*ground set* of $P$) and *partial order* $\leq$ on $X$.

## Notes

- [[total order]] has additional property that for any $a \neq b$, either $a < b$ or $b < a$

___
## References

1. https://mathworld.wolfram.com/PartialOrder.html
2. https://ncatlab.org/nlab/show/partial+order
3. https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/A_Spiral_Workbook_for_Discrete_Mathematics_(Kwong)/07%3A_Relations/7.04%3A_Partial_and_Total_Ordering
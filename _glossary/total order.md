---
layout: page
title: total order
aliases:
  - totally ordered set
  - linearly ordered set
  - toset
  - 全序集
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-09T16:15:32-04:00
tags:
  - set_theory
---
## Definition

A **total order** is a *relation* on a *totally ordered set*.

A **totally ordered set** is a [[set]] satisfying conditions for a [[partial order|partial order]] in addition to the comparability condition (trichotomy law). Hence a relation $\leq$ is a **total order** on a set $S$ if the following hold
- reflexivity: $a \leq a$ for all $a \in S$
- antisymmetry: $a \leq b$ and $b \leq a$ implies $a = b$
- transitivity: $a \leq b$ and $b \leq c$ implies $a \leq c$
- comparability (trichotomy law): for any $a,b \in S$, either $a \leq b$ or $b \leq a$

___
## References

1. https://mathworld.wolfram.com/TotalOrder.html
2. https://mathworld.wolfram.com/TotallyOrderedSet.html
3. https://www.bananaspace.org/wiki/%E5%85%A8%E5%BA%8F%E9%9B%86
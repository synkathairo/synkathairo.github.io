---
layout: entry
title: preference relation
aliases:
type:
  - definition
reference:
course:
  - ECE6263
lecture:
statement: A **preference relation** of player $i$ over a set of outcomes $O$ is a binary relation denoted by $\succsim_i$. $x \succsim_i y$ as "player $i$ either prefers $x$ to $y$ or is indifferent between the two outcomes"
created: 2024-11-09T20:04:39-05:00
tags:
  - game_theory
---

## Definition

A **preference relation** of player $i$ over a set of outcomes $O$ is a binary relation denoted by $\succsim_i$.

$x \succsim_i y$ as "player $i$ either prefers $x$ to $y$ or is indifferent between the two outcomes"

## Assumptions

### Complete

The preference relation $\succsim_i$ over $O$ is **complete**, that is, for any pair of outcomes $x$ and $y$ in $O$, either $x \succsim_i y$, or $y \succsim_i x$, or both.

### Reflexive

The preference relation $\succsim_i$ over $O$ is **reflexive**, that is, $x \succsim_i x$ for every $x \in O$.

### Transitive

The preference relation $\succsim_i$ over $O$ is **reflexive**, that is, for any triplet of outcomes $x$, $y$, and $z$ in $O$, if $x \succsim_i y$ and $y \succsim_i z$ then $x \succsim_i z$.

## Compare

- [[strict preference relation]]
- [[indifference relation]]

---

## References

1. M. Maschler, E. Solan, and Shmuel Zamir, Game Theory, Cambridge University Press, 2013, p. 10.

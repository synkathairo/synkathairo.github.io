---
layout: entry
title: filtration
aliases:
  - filtration
type:
  - definition
reference: 
course: 
lecture: 
statement: 
created: 2025-05-06T15:02:15-04:00
tags:
  - probability
---
## Definition
Let $(\Omega, \mathcal{A},P)$ be a [[probability space]], $I$ an index set with [[total order]] $\leq$ (e.g. $\mathbb{N}$, $\mathbb{R}^+$, or subset of $\mathbb{R}^+$)
For every $i \in I$ let $\mathcal{F}_i$ be a sub-[[σ-algebra]] of $\mathcal{A}$. Then $\mathbb{F} := (\mathcal{F}_i)_{i \in I}$ is called a **filtration**, if $\mathcal{F}_k \subseteq \mathcal{F}_\ell$ for all $k \leq \ell$. i.e., filtrations are families of [[σ-algebra|σ-algebras]] ordered non-decreasingly.

If $\mathbb{F}$ is a *filtration*, then $(\Omega, \mathcal{A}, \mathbb{F},P)$ is called a *filtered probability space*.

___
## References
1. https://en.wikipedia.org/wiki/Filtration_(probability_theory)

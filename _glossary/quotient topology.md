---
layout: entry
title: quotient topology
aliases:
  - quotient map
type:
  - definition
reference:
course:
lecture:
statement: "If $X$ is a *space* and $A$ is a [[set]], $p: X \\to A$ a [[surjective]] map, then there exists exactly one [[topology]] $\\mathcal{T}$ on $A$ relative to which $p$ is a *quotient map*, called the **quotient topology** induced by $p$."
created: 2026-01-05T19:44:44-05:00
tags:
  - topology
---

## Definition

Let $X$ and $Y$ be [[topological space|topological spaces]], let $p: X \to Y$ be a [[surjective]] mapping, then the [[map]] $p$ is said to be a **quotient map** provided a subset $U \subseteq Y$ is open in $Y$ iff $p^{-1}(U)$ [[open set|open]] in $X$.

If $X$ is a _space_ and $A$ is a [[set]], $p: X \to A$ a [[surjective]] map, then there exists exactly one [[topology]] $\mathcal{T}$ on $A$ relative to which $p$ is a _quotient map_, called the **quotient topology** induced by $p$.

Wherefore, _topology_ $\mathcal{T}$ is defined by consisting of subsets $U \subseteq A$ such that $p^{-1}(U)$ is _open_ in $X$.

## Notes

- an _open map_ $f: X \to Y$ is such that for each open set $U$ of $X$, set $f(U)$ open in $Y$
  - c.f. a _closed map_ $f: X \to Y$ is such that for each closed set $U$ of $X$, set $f(U)$ closed in $Y$
  - if $p: X \to Y$ is a [[surjective]] [[continuous function|continuous]] map that is either open or closed, then $p$ is a _quotient map_

---

## References

1. J. R. Munkres, _Topology_, 2. ed., Pearson new internat. ed. Harlow: Pearson, 2014, pp. 136-138.

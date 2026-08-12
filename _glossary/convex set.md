---
layout: page
title: convex set
aliases:
  - 凸集
type:
  - definition
reference:
course:
  - CS6763
lecture:
  - cs6763-6
statement: "A set $\\mathcal{S}$ is convex if for any $\\mathbf{x},\\mathbf{y} \\in \\mathcal{S}$, $\\lambda \\in [0,1]$: $(1-\\lambda)\\mathbf{x} + \\lambda \\mathbf{y} \\in \\mathcal{S}$"
created: 2023-11-02T16:35:19-04:00
tags:
  - convex_optimization
  - geometry
---
## Definition
A [[set]] $\mathcal{S}$ is **convex** if for any $\mathbf{x},\mathbf{y} \in \mathcal{S}$, $\lambda \in [0,1]$:
$$(1-\lambda)\mathbf{x} + \lambda \mathbf{y} \in \mathcal{S}$$

___

## Theorem:
Let $f : S \longrightarrow \mathbb{R}$ be a function defined on the convex subset $S$ of a real linear space $L$. Then, $f$ is [[convex function|convex]] on $S$ if and only if its [[epigraph and hypograph of functions|epigraph]] is a convex subset of $S × \mathbb{R}$; $f$ is concave if and only if its [[epigraph and hypograph of functions|hypograph]] is a convex subset of $S × \mathbb{R}$.

___
## References
1. https://www.cs.umb.edu/~dsim/cs724/sconvs3.pdf
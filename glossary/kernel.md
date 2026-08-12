---
layout: entry
title: kernel
aliases:
type:
  - definition
reference:
course:
lecture:
statement:
created: 2025-10-16T15:09:55-04:00
tags:
---

## Definition

Let $\mathcal{X}$ be a non-empty [[set]]. A [[function]] $k : \mathcal{X} \times \mathcal{X} \to \mathbb{R}$ is a **kernel** if there exists a $\mathbb{R}$-[[Hilbert space]] and a [[map]] $\phi: \mathcal{X} \to \mathcal{H}$ such that $\forall x,x' \in \mathcal{X}$, $$k(x,x') := \langle \phi(x),\phi(x')\rangle_\mathcal{H}$$

## Notes

- theorem sums of kernels $k_1 + k_2$ are kernels, and $\alpha k$ is a kernel for $\alpha >0$

---

## References

1. http://mlss.tuebingen.mpg.de/2015/slides/gretton/part_1.pdf

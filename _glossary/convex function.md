---
layout: entry
title: convex function
aliases:
  - 凸函数
type:
  - definition
reference:
course:
  - CS6763
  - CSCI2945
lecture:
  - cs6763-6
statement: "A function $f$ is convex iff for any $\\mathbf{x},\\mathbf{y},\\lambda \\in [0,1]$: $(1-\\lambda) \\cdot f(\\mathbf{x})+\\lambda \\cdot  f(\\mathbf{y}) \\geq f((1-\\lambda) \\cdot \\mathbf{x} + \\lambda \\cdot \\mathbf{y})$"
created: 2023-11-02T16:17:37-04:00
tags:
  - analysis
  - convex_optimization
---

## Definition

A function $f$ is **convex** iff for any $\mathbf{x},\mathbf{y},\lambda \in [0,1]$:
$$(1-\lambda) \cdot f(\mathbf{x})+\lambda \cdot  f(\mathbf{y}) \geq f((1-\lambda) \cdot \mathbf{x} + \lambda \cdot \mathbf{y})$$

(see [[Jensen's inequality]])

## convexity in one dimension

A twice-differentiable function $f : \mathbb{R} → R$ is:

- convex if and only if $f''(x) ≥ 0$ for all $x$.
- [[β-smoothness|β-smooth]] if $f''(x) ≤ β$.
- [[α-strongly convex]] if $f''(x) ≥ α$.

## Definition (function convexity, gradient)

A function $f$ is convex if and only if for any $\mathbf{x},\mathbf{y}$:
$$f(\mathbf{x}+\mathbf{z}) \geq f(\mathbf{x}) + \nabla f(\mathbf{x})^\mathsf{T} \sf{z}$$
equivalently,
$$f(\mathbf{x}) - f(\mathbf{y}) \leq \nabla f(\mathbf{x})^\mathsf{T} (\mathbf{x}-\mathbf{y})$$

## See also:

- [[convex set]]

---

## References:

1. https://www.cs.cornell.edu/courses/cs6783/2018fa/lec16-supplement.pdf

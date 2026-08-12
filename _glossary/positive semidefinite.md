---
layout: page
title: positive semidefinite
aliases:
  - PSD
type:
  - definition
reference:
course:
  - CS6763
  - CSCI2945
lecture:
  - cs6763-8
statement: A square, symmetric matrix $H ∈ \mathbb{R}^{d×d}$ is positive semidefinite (PSD) for any vector $y ∈ \mathbb{R}^d$, $\mathbf{y}^\intercal \mathbf{Hy} ≥ 0$.
created: 2023-11-30T04:41:50-05:00
---
## Definition
A square, symmetric matrix $H ∈ \mathbb{R}^{d×d}$ is **positive semidefinite** (PSD) for any vector $y ∈ \mathbb{R}^d$, $\mathbf{y}^\intercal \mathbf{Hy} ≥ 0$.

### Notation
Use *Loewner order*, `\succeq` to denote $\mathbf{H}$ is PSD, i.e.
$$\mathbf{H} \succeq 0$$
Write $\mathbf{B} \succeq \mathbf{A}$ or equivalently $\mathbf{A} \preceq \mathbf{B}$ to denote that $(\mathbf{B}-\mathbf{A})$ is PSD; this gives a *partial ordering* on matrices.

## Convexity and PSD

If $f$ is twice differentiable, then it is [[convex function|convex]] if and only if the matrix $∇^2 f(\mathbf{x})$ ([[Hessian matrix]]) is *positive semidefinite* for all $\mathbf{x}$.

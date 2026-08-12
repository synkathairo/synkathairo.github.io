---
layout: entry
title: orthogonal matrix
aliases:
type:
  - definition
reference:
course:
  - CS6763
lecture:
  - cs6763-10
statement: A $n \times n$ matrix $\mathbf{A}$ is an orthogonal matrix if $\mathbf{AA}^{\sf T} = I$ where $\mathbf{A}^{\sf T}$ is the transpose of $\mathbf{A}$ and $\mathbf{I}$ is the identity matrix.The rows of an orthogonal matrix form an orthonormal basis.
created: 2023-12-14T16:36:52-05:00
tags:
  - linear_algebra
---

## Definition

A $n \times n$ matrix $\mathbf{A}$ is an **orthogonal matrix** if
$$\mathbf{AA}^{\sf T} = \mathbf{A}^{\sf T}\mathbf{A} = I$$
where $\mathbf{A}^{\sf T}$ is the transpose of $\mathbf{A}$ and $\mathbf{I}$ is the identity matrix.

(a real square matrix with columns and rows that are _orthonormal_ vectors)

Orthogonal matrices are always invertible,
$$\mathbf{A}^{-1} = \mathbf{A}^{\sf T}$$

The rows of an orthogonal matrix form an [[orthonormal basis|orthonormal basis]].

---

## References:

1. https://mathworld.wolfram.com/OrthogonalMatrix.html
2. https://www.ucl.ac.uk/~ucahmdl/LessonPlans/Lesson10.pdf

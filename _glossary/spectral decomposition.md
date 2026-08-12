---
layout: entry
title: spectral decomposition
aliases:
  - eigendecomposition of a matrix
type:
  - definition
reference:
course:
  - CS6763
lecture:
  - cs6763-10
statement: For any symmetric matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, there exists an orthogonal matrix $\mathbf{Q} = [\mathbf{q}_1...\mathbf{q}_n]$ and a diagonal matrix $\mathbf{\Lambda} = \mathrm{diag} (\lambda_1,…,\lambda_n)$, both real and square, such that$$\mathbf{A} = \mathbf{Q\Lambda Q}^{\sf T}$$
created: 2023-12-14T16:12:58-05:00
tags:
  - linear_algebra
---

## Overview

Symmetric matrices are always (orthogonally) diagonalizable.

That is, for any symmetric matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$, there exists an [[orthogonal matrix|orthogonal matrix]] $\mathbf{Q} = [\mathbf{q}_1...\mathbf{q}_n]$ and a diagonal matrix $\mathbf{\Lambda} = \mathrm{diag} (\lambda_1,…,\lambda_n)$, both real and square, such that
$$\mathbf{A} = \mathbf{Q\Lambda Q}^{\sf T}$$
where $\lambda_i$’s are the [[eigenvalue and eigenvector|eigenvalues]] of $\mathbf{A}$ and $\mathbf{q}_i$’s the corresponding [[eigenvalue and eigenvector|eigenvectors]] (orthogonal to each other and with unit norm).

Such a factorization is called the **eigendecomposition** of $\mathbf{A}$, also called the **spectral decomposition** of $\mathbf{A}$.

---

For general rectangular matrices, there is [[Singular value decomposition]].

---

## References:

1. https://www.sjsu.edu/faculty/guangliang.chen/Math253S20/lec5svd.pdf
2. https://people.math.carleton.ca/~kcheung/math/notes/MATH1107/wk10/10_symmetric_matrices.html
3. https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix

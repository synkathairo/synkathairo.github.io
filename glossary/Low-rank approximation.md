---
layout: entry
title: Low-rank approximation
aliases:
type:
  - approach
reference:
course:
  - CS6763
lecture:
  - cs6763-11
statement: Approximate $\mathbf{X}$ as the product of two rank-$k$ matrices.Use two matrices $\mathbf{C} \in \mathbb{R}^{n \times k}$ and $\mathbf{W} \in \mathbb{R}^{d \times k}$, where $k < \min (n,d)$. Typically we want to choose $\mathbf{C}$ and $\mathbf{W}$ to minimize$$\min_{\mathbf{B},\mathbf{W}} \lVert \mathbf{X} - \mathbf{CW}^{\sf T} \rVert$$for some matrix norm
created: 2023-12-03T20:41:48-05:00
---

## Column span

The column span of a matrix $\mathbf{X} \in \mathbb{R}^{n \times d}$ is the set of all vectors that can be written as $\mathbf{Xa}$ for some $\mathbf{a} \in \mathbb{R}^d$.
The dimension of the column span $D_c$ is the maximum number of linearly independent vectors in the column span.

## Row span

The row span of a matrix $\mathbf{X} \in \mathbb{R}^{n \times d}$ is the set of all vectors that can be written as $\mathbf{X}^{\sf T}\mathbf{b}$ for some $\mathbf{b} \in \mathbb{R}^d$.
The dimension of the row span $D_r$ is the maximum number of linearly independent vectors in the row span.

## Rank

We have
$$D_c \leq d \qquad D_r \leq n \qquad D_c = D_r$$

We call the value $D_c = D_r$, the rank of $\mathbf{X}$.

## Low-rank approximation

Approximate $\mathbf{X}$ as the product of two rank-$k$ matrices.

Use two matrices $\mathbf{C} \in \mathbb{R}^{n \times k}$ and $\mathbf{B} \in \mathbb{R}^{d \times k}$, where $k < \min (n,d)$. Typically we want to choose $\mathbf{C}$ and $\mathbf{B}$ to minimize
$$\min_{\mathbf{B},\mathbf{C}} \lVert \mathbf{X} - \mathbf{CB} \rVert$$
for some matrix norm, e.g. Frobenius norm or square of as $\lVert \mathbf{X} - \mathbf{CW}^{\sf T} \rVert_F^2$

Without loss of generality can assume right matrix is [[orthogonal matrix|orthogonal]], i.e. $\mathbf{W}^{\sf T}$ with $\mathbf{W}^{\sf T}\mathbf{W} = \mathbf{I}$.

#incomplete

---

References:

1. https://www.chrismusco.com/amlds2023/notes/lecture11.html#Low-Rank_Approximation

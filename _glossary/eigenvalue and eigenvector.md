---
layout: page
title: eigenvalue and eigenvector
aliases:
  - eigenvalue
  - eigenvector
  - 特征值
  - 特征向量
type:
  - definition
reference:
course:
  - CS6763
lecture:
  - cs6763-10
statement: A vector $\mathbf{v} \in \mathbb{R}^d$ is an **eigenvector** of a matrix $\mathbf{X} \in \mathbb{R}^{d \times d}$, if there exists a scalar $\lambda$, called the **eigenvalue**, such that $\mathbf{Xv} = \lambda \mathbf{v}$
created: 2023-12-14T15:20:32-05:00
tags:
  - linear_algebra
---
A vector $\mathbf{v} \in \mathbb{R}^d$ is an **eigenvector** of a matrix $\mathbf{X} \in \mathbb{R}^{d \times d}$, if there exists a scalar $\lambda$ such that
$$\mathbf{Xv} = \lambda \mathbf{v}$$
where the scalar $\lambda$ is called the **eigenvalue** associated with $\mathbf{v}$.

## Notes
- intuitively: the eigenvector does not change direction upon application of linear transformation $\mathbf{X}$, and merely is scaled by $\lambda$
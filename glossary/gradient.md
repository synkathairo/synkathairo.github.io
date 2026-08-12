---
layout: entry
title: gradient
aliases:
type:
  - definition
reference:
course:
  - CS6763
lecture:
  - cs6763-6
statement: $\nabla f(\mathbf{x}) = \begin{bmatrix}\frac{\partial f}{\partial x_1}(\mathbf{x})\\ \vdots \\\frac{\partial f}{\partial x_d} (\mathbf{x})\end{bmatrix}$
created: 2023-11-23T18:54:18-05:00
tags:
  - machine_learning
  - calculus
---

## Definition

The **gradient** of $f$ is the vector of partial derivatives as
$$\nabla f(\mathbf{x}) = \begin{bmatrix}\frac{\partial f}{\partial x_1}(\mathbf{x})\\ \vdots \\\frac{\partial f}{\partial x_d} (\mathbf{x})\end{bmatrix}$$

## Notes

- it may be noted that the _gradient_ may be defined as a [[linear functional]] on $\mathbb{R}^n$ and hence belongs to the [[dual space]] of $\mathbb{R}^n$

## See also

- [[Hessian matrix]]

---

## References:

1. https://www.chrismusco.com/amlds2023/notes/lecture06.html
2. https://www.cs.cmu.edu/afs/cs.cmu.edu/academic/class/15850-f20/www/notes/lec19.pdf

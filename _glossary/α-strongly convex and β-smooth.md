---
layout: entry
title: α-strongly convex and β-smooth
aliases:
  - alpha-strongly convex and beta-smooth
type:
  - definition
reference: 
course:
  - CS6763
lecture:
  - cs6763-8
statement: |-
  A function is $\alpha$-strongly convex and [β-smooth if for all $\mathbf{x},\mathbf{y}$:$$\frac{\alpha}{2}||\mathbf{y}-\mathbf{x}||_2^2 \leq [f(\mathbf{y})-f(\mathbf{x})]-\nabla f(\mathbf{x})^\mathsf{T}(\mathbf{y}-\mathbf{x}) \leq \frac{\beta}{2}||\mathbf{y}-\mathbf{x}||_2^2$$
  for scalar functions, a twice-differentiable function $f$ is $\alpha$-strongly convex and β-smooth if for all $x$,$$\alpha \leq f''(x) \leq \beta$$
created: 2023-11-30T04:49:58-05:00
---

A function is [[α-strongly convex]] and [[β-smoothness|β-smooth]] if for all $\mathbf{x},\mathbf{y}$:
$$\frac{\alpha}{2}||\mathbf{y}-\mathbf{x}||_2^2 \leq [f(\mathbf{y})-f(\mathbf{x})]-\nabla f(\mathbf{x})^\mathsf{T}(\mathbf{y}-\mathbf{x}) \leq \frac{\beta}{2}||\mathbf{y}-\mathbf{x}||_2^2$$
(multidimensional generalization)

___
For scalar functions, a twice-differentiable function $f$ is [[α-strongly convex]] and [[β-smoothness|β-smooth]] if for all $x$,
$$\alpha \leq f''(x) \leq \beta$$

___
If f is [[β-smoothness|β-smooth]] and [[α-strongly convex]] then at any point $\mathbf{x}$, the Hessian $∇^2 f(\mathbf{x})$ satisfies:
$$\alpha \mathbf{I} \preceq ∇^2 f(\mathbf{x}) \preceq \beta \mathbf{I}$$
where $\mathbf{I}$ is a $d \times d$ identity matrix.

This is the natural matrix generalization of the statement for scalar valued functions.

Note the [[positive semidefinite|PSD]] relations

Equivalently for any $\mathbf{z}$, 

#incomplete 

___
## condition number

$\kappa = \frac{\beta}{\alpha}$ is called the **condition number** of $f$

---
layout: entry
title: α-strongly convex
aliases:
  - alpha-strongly convex
type:
  - definition
reference: 
course:
  - CS6763
lecture:
  - cs6763-6
  - cs6763-8
statement: A convex function $f$ is $\alpha$-strongly convex if, for all $\mathbf{x},\mathbf{y}$, $[f(\mathbf{y})-f(\mathbf{x})]-\nabla f(\mathbf{x})^\mathsf{T}(\mathbf{y}-\mathbf{x}) \geq \frac{\alpha}{2}||\mathbf{x}-\mathbf{y}||_2^2$
created: 2023-11-02T18:21:12-04:00
---

## Definition
A [[convex function|convex function]] $f$ is $\alpha$-strongly convex if, for all $\mathbf{x},\mathbf{y}$:
$$[f(\mathbf{y})-f(\mathbf{x})]-\nabla f(\mathbf{x})^\mathsf{T}(\mathbf{y}-\mathbf{x}) \geq \frac{\alpha}{2}||\mathbf{x}-\mathbf{y}||_2^2$$

Compare to [[β-smoothness|smoothness]] condition
$$[f(\mathbf{y})-f(\mathbf{x})]-\nabla f(\mathbf{x})^\mathsf{T}(\mathbf{y}-\mathbf{x}) \leq \frac{\beta}{2}||\mathbf{x}-\mathbf{y}||_2^2$$

For twice-differentiable scalar function $f$, equivalent to $f''(x) \geq \alpha$ .

When $f$ is convex, we always have that $f''(x) ≥ 0$, so larger values of $α$ correspond to a “stronger” condition.

___
A function is $\alpha$-strongly convex and [[β-smoothness|β-smooth]] if for all $\mathbf{x},\mathbf{y}$:
$$\frac{\alpha}{2}||\mathbf{y}-\mathbf{x}||_2^2 \leq [f(\mathbf{y})-f(\mathbf{x})]-\nabla f(\mathbf{x})^\mathsf{T}(\mathbf{y}-\mathbf{x}) \leq \frac{\beta}{2}||\mathbf{y}-\mathbf{x}||_2^2$$
(multidimensional generalization)

___
For scalar functions, a twice-differentiable function $f$ is $\alpha$-strongly convex and [[β-smoothness|β-smooth]] if for all $x$,
$$\alpha \leq f''(x) \leq \beta$$

NOTE: this definition requires scalar function and twice differentiable i.e. $C^2$ 
relate the two definitions via Taylor's theorem in 1 variable,


Condition number: $\beta/\alpha$


___
## References
1. https://www.chrismusco.com/amlds2023/lectures/lec6_annotated.pdf
2. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf

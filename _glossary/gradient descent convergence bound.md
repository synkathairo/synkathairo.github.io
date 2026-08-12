---
layout: entry
title: gradient descent convergence bound
aliases:
  - GD convergence bound
type:
  - theorem
reference:
course:
  - CS6763
lecture:
  - cs6763-6
statement: If we run gradient descent for $T \geq \frac{R^2 G^2}{\epsilon^2}$ iterations then $f(\mathbf{\hat{x}}) \leq f(\mathbf{x^*}) + \epsilon$
created: 2023-11-02T16:34:42-04:00
tags:
  - machine_learning
---

For $G$-[[Lipschitz function|Lipschitz]] function $f$ where $R$ is the starting radius, $\lVert x^∗ − x^{(0)}\rVert_2 ≤ R$

If we run [[gradient descent|GD]] for $T \geq \frac{R^2 G^2}{\epsilon^2}$ iterations then $f(\mathbf{\hat{x}}) \leq f(\mathbf{x^*}) + \epsilon$

---

If we run [[gradient descent|GD]] for $T \geq \frac{R^2 G^2}{\epsilon^2}$ iterations with step-size $\eta = \frac{R}{G \sqrt{T}}$ then $f(\mathbf{\hat{x}}) \leq f(\mathbf{x^*}) + \epsilon$

---

([[projected gradient descent|Projected]]) [[gradient descent]] returns $\hat{\mathbf{x}}$ with $f(\hat{\mathbf{x}}) \leq \min_{\mathbf{x} \in \mathcal{S}} f(\mathbf{x}) + \epsilon$ after $T = \frac{R^2 G^2}{\epsilon^2}$ iterations.

---

## Proof

Claim 1: For all $i=0,…,T$,

$$ f(\mathbf{x}^{(i)})-f(\mathbf{x}^*)
\leq \frac{||\mathbf{x}^{(i)}-\mathbf{x}^*||_2^2-||\mathbf{x}^{(i+1)}-\mathbf{x}^*||_2^2}{2\eta} + \frac{\eta G^2}{2}$$
Claim 1(a): For all $i=0,…,T$,
$$\nabla f (\mathbf{x}^{(i)})^{\mathsf{T}}(\mathbf{x}^{(i)}-\mathbf{x}^{*})
\leq \frac{||\mathbf{x}^{(i)}-\mathbf{x}^*||_2^2-||\mathbf{x}^{(i+1)}-\mathbf{x}^*||_2^2}{2\eta} + \frac{\eta G^2}{2}$$
Claim 1 follows from Claim 1(a) by definition of convexity.

#incomplete

___
See [[gradient descent]], [[convergence]]

___
## References:
1. https://www.stat.cmu.edu/~ryantibs/convexopt-F13/scribes/lec6.pdf
$$

---
layout: entry
title: gradient descent
type:
  - algorithm
reference:
lecture:
  - cs6763-6
  - ece6123-7-imagerecovery
statement: update $\mathbf{x} \leftarrow \mathbf{x} + \eta\mathbf{v}$
created: 2023-10-13T15:00:28-04:00
course:
  - CS6763
  - ECE6123
tags:
  - machine_learning
---

## General gradient descent algorithm

Iteratively update the parameters $\mathbf{x}$ by making small adjustment that decreases $f(\mathbf{x})$.

In particular, update $\mathbf{x} \leftarrow \mathbf{x} + \eta\mathbf{v}$ where $\eta > 0$ is step size.

## Gradient descent method

Iteratively update the current estimate in the direction opposite the gradient direction
$$\mathbf{x}^{(l+1)}=\mathbf{x}^{(l)}-\alpha \frac{\partial J}{\partial \mathbf{x}}\Bigr|_{\substack{\mathbf{x}^{(l)}}}$$
The solution depends on the initial condition. Reaches the local minimum closest to the initial condition if the stepsize is chosen properly.

Yield global optimal if J is [[convex function|convex]], regardless initial solution

## Gradient descent analysis

Assume:

- $f$ is [[convex function|convex]]
- [[Lipschitz function]]: for all $\mathbf{x}$, $||\nabla f(\mathbf{x})||_2 \leq G$
- starting radius: $||\mathbf{x}^{*}-\mathbf{x}^{(0)}||_2 \leq R$

**Gradient descent**:

- choose number of steps $T$
- starting point $\mathbf{x}^{(0)}$, e.g. $\mathbf{x}^{(0)} = \vec{0}$
- $\eta = \frac{R}{G \sqrt{T}}$
- for $i=0,…,T$:
  - $\mathbf{x}^{(i+1)}=\mathbf{x}^{(i)}-\eta \nabla f(\mathbf{x}^{(i)})$
- return $\hat{\mathbf{x}} = \arg \min_{\mathbf{x}^{(i)}} f(\mathbf{x}^{(i)})$

[[gradient descent convergence bound]]

---

## Gradient descent for constrained optimization

- Let $\eta==\frac{D}{G\sqrt{T}}$
- Let $x_0$ be any point in $\mathcal{K}$.
- **Repeat for $i=0$ to $T$**
- $y_{i+1} \leftarrow x_i -\eta\nabla f(x_i)$
- $x_{i+1} \leftarrow$ Projection of $y_{i+1}$ on $\mathcal{K}$
- At the end output $\bar{x}=\frac{1}{T} \sum_{i=0}^T x_i$.

$D$ is the diameter for $\mathcal{K}$, or if unconstrained, then simply an upper bound on $||x_0 - x^*||$. $G$ is an upper bund on the size of $f$‘s gradient, i.e. $||\nabla f(x)||_2 \leq G, \forall x$.

---

See: [[stochastic gradient descent]], [[gradient]]

---

## References:

1. https://www.chrismusco.com/amlds2023/notes/lecture06.html#Projected_Gradient_Descent
2. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf
3. https://www.cs.princeton.edu/courses/archive/fall18/cos521/Lectures/lec16.pdf
4. https://en.wikipedia.org/wiki/Gradient_descent
5. https://www.stat.cmu.edu/~ryantibs/convexopt-F13/scribes/lec6.pdf
6. https://scholar.harvard.edu/files/yujietang/files/slides_2019_zero-order_opt_tutorial.pdf
7. S. P. Boyd and L. Vandenberghe, _Convex optimization_, Version 29. Cambridge New York Melbourne New Delhi Singapore: Cambridge University Press, 2023. [Online]. Available: [https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf](https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf)

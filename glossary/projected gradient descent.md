---
layout: entry
title: projected gradient descent
type:
  - approach
reference:
course:
  - CS6763
lecture:
  - cs6763-6
statement: $x^{(t+1)} = P_{\mathcal{S}} (x^{(t)} - \eta \nabla f(x^{(t)}))$
created: 2023-11-14T21:25:42-05:00
---

## Overview

**Projected gradient descent** is a simple modification of [[gradient descent]]. Instead of setting the next iterate to

$$ \begin{aligned}
x^{(t+1)} = x^{(t)} - \eta \nabla f(x^{(t)}),
\end{aligned}$$
we set the next iterate to
$$\begin{aligned}
x^{(t+1)} = P_{\mathcal{S}} (x^{(t)} - \eta \nabla f(x^{(t)})).
\end{aligned}$$

(project to nearest point in feasible set $\mathcal{S}$)

## Projected gradient descent convergence bound
(PGD convergence bound)

If $f, \mathcal{S}$ are [[convex function|convex]] and $T \geq \frac{R^2 G^2}{\epsilon^2}$, then $f(\mathbf{\hat x}) \leq f(\mathbf{x^*}) + \epsilon$.

## Analysis

[[projected gradient descent convergence bound|PGD convergence bound]]


___
Compare PGD to [[gradient descent|GD]]

In GD:
1. Pick an initial point $\mathbf{x}_0 \in \mathbb{R}^n$
2. Loop until stopping condition is met:
	1. descent direction: compute $-\nabla f(\mathbf{x}_k)$
	2. stepsize: pick a $\alpha_k$
	3. update: $\mathbf{x}_{k+1} = \mathbf{x}_{k}-\alpha \nabla f(\mathbf{x}_k)$

In PGD:
1. Pick an initial point $\mathbf{x}_0 \in \mathcal{Q}$, where $\mathcal{Q}$ is a set to constrain the solution
2. Loop until stopping condition is met:
	1. descent direction: compute $-\nabla f(\mathbf{x}_k)$
	2. stepsize: pick a $\alpha_k$
	3. update: $\mathbf{y}_{k+1} = \mathbf{x}_{k}-\alpha \nabla f(\mathbf{x}_k)$
	4. projection: $\mathbf{x}_{k+1} = {\arg\min}_{\mathbf{x} \in \mathcal{Q}} \frac{1}{2}||\mathbf{x}-\mathbf{y}_{k+1}||_2^2$


___
## References:
1. https://angms.science/doc/CVX/CVX_PGD.pdf
2. https://www.chrismusco.com/amlds2023/notes/lecture06.html#Projected_Gradient_Descent
$$

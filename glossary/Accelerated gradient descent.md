---
layout: entry
title: Accelerated gradient descent
aliases:
  - Nesterov's accelerated gradient descent
type:
  - algorithm
reference:
course:
  - CS6763
  - CSCI2945
lecture:
  - cs6763-8
statement:
created: 2023-12-01T01:10:57-05:00
---

Initialize starting vector $\mathbf{v}^{(0)} = \mathbf{y}^{(1)} = \mathbf{z}^{(1)}$. For $t = 1,...,T$, compute

- $\mathbf{y}^{(t+1)} = \mathbf{x}^{(t)}-\frac{1}{\beta}\nabla f(\mathbf{x}^{(t)})$
- $\mathbf{x}^{(t+1)} = \left( 1 + \frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1} \right)\mathbf{y}^{(t+1)} + \frac{\sqrt{\kappa}-1}{\sqrt{\kappa}+1}\left(\mathbf{y}^{(t+1)} - \mathbf{y}^{(t)}\right)$

Let $f$ be [[α-strongly convex and β-smooth|alpha-strongly convex and beta-smooth]], then, running accelerated [[gradient descent|gradient descent]] for $T$ steps, output $\hat{x}$ satisfies, with $\kappa = \frac{\beta}{\alpha}$ [[α-strongly convex and β-smooth#condition number|condition number]],

$$f(\mathbf{x}^{(T)}) - f(\mathbf{x}^*) \leq \kappa e^{-T/\sqrt{\kappa}}[f(\mathbf{x}^{(0)})-f(\mathbf{x}^*)]$$

---

## Complexity analysis:

Suppose $f$ [[α-strongly convex and β-smooth|strongly convex]] such that
$$mI \preceq \nabla^2 f(x) \preceq MI, \quad \text{for all } x$$
Recall that setting $t = 1/M$,
$$f(x^{(k)}) - p^* \leq (1- \frac{1}{\kappa})^k (f(x^{(0)} - p^*)$$
where $\kappa = M/m$, and $p^*$ is the minimum value of $f$.

#incomplete

---

References:

1. https://web.archive.org/web/20210302210908/https://blogs.princeton.edu/imabandit/2013/04/01/acceleratedgradientdescent/
2. https://www.chrismusco.com/amlds2023/lectures/lec8_annotated.pdf
3. https://www.chrismusco.com/amlds2023/notes/lecture08.html#Accelerated_Gradient_Descent
4. Yurii Nesterov - _Introductory Lectures on Convex Optimization_, pgs. 66-68, 81. https://link.springer.com/book/10.1007/978-1-4419-8853-9
5. Yurii Nesterov - _Lectures on Convex Optimization_

---
layout: page
title: online regret bound
type: 
reference: 
course:
  - CS6763
lecture: 
statement: 
created: 2023-11-28T17:21:06-05:00
---
## Definition (regret bound)
Suppose $f_1,...,f_T$ are [[convex function|convex]], [[Lipschitz function|G-Lipschitz]], and gradients are $L$-Lipschitz. Then, after $T$ steps, the *regret* is
$$\epsilon = \left[\sum_{i=1}^T f_i(\mathbf{x}^{(i)})\right] - \left[\sum_{i=1}^T f_i(\mathbf{x}^*)\right] \leq RG\sqrt{T}$$
where $\mathbf{x}^* = \arg\min_\mathbf{x} \sum_{i=1}^T f_i(\mathbf{x})$ is the offline optimum.
Hence average regret overtime is bounded by $\frac{\epsilon}{T} \leq \frac{RG}{\sqrt{T}}$.

Goes $\to 0$ as $T \to \infty$

## See also
- [[online gradient descent]]
- [[regret bound]]


___
References:
1. https://www.cs.princeton.edu/courses/archive/fall18/cos521/Lectures/lec16.pdf